// cost comparisio bubble
let svg1 = d3.select("#max")
let svg2 = d3.select("#olivia")

createBubbleChart(svg1, "./data.json")
createBubbleChart(svg2, "./data2.json")

function createBubbleChart(svg, data) {

  let margin = 20
  let diameter = +svg.attr("width")

  let g = svg
    .append("g")
    .attr(
      "transform",
      "translate(" + diameter / 2 + "," + diameter / 2 + ")"
    );

// color
let color;
if (svg.attr("id") === "olivia") {
    color = d3.scaleLinear()
    .domain([-1, 2])
    .range(["white", "#EBC448"])
} else if (svg.attr("id") === "max") {
  color = d3.scaleLinear()
    .domain([-1, 3])
    .range(["white", "#0E8A40"])
    .interpolate(d3.interpolateHcl);
}


let pack = d3
    .pack()
    .size([diameter - margin, diameter - margin])
    .padding(2);

d3.json(data, function (error, root) {
    if (error) throw error;

    root = d3
      .hierarchy(root)
      .sum(function (d) {
        return d.size;
      })
      .sort(function (a, b) {
        return b.value - a.value;
      });

    let focus = root
    let nodes = pack(root).descendants()
    let view

    let circle = g
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", function (d) {
        return d.parent ?
          d.children ?
          "node" :
          "node node--leaf" :
          "node node--root";
      })
      .style("fill", function (d) {
        return d.children ? color(d.depth) : null;
      })
      .on("click", function (d) {
        if (focus !== d) zoom(d), d3.event.stopPropagation();
      });

// information
let text = g
  .selectAll("g")
  .data(nodes)
  .enter()
  .append("g")
  .append("foreignObject")
  .attr("x", "-3.7em")
  .attr("y", "-2em")
  .attr("width", "100px")
  .attr("height", "100px")
  .attr("class", "label")
  // .style("border", "1px solid #f00")
  .style("opacity", function (d) {
    return d.parent === root ? 1 : 0;
  })
  .style("display", function (d) {
    return d.parent === root ? "inline" : "none";
  })
  .append("xhtml:div")
  .attr("class", "name")
  .html(function (d) {
    return d.data.name;
  })
  .style("color", function(d) {
    return d.data.name === 'olivia' ? 'white' : 'black';  })
  .append("xhtml:div")
  .attr("class", "size")
  .html(function (d) {
    return "$" + d.data.size;
  })

    let node = g.selectAll("circle, g");

    svg.style("background", color(-1)).on("click", function () {
      zoom(root)
    });

    zoomTo([root.x, root.y, root.r * 2 + margin]);

    function zoom(d) {
      let focus = d
      let transition = svg
        .transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function (d) {
          let i = d3.interpolateZoom(view, [
            focus.x,
            focus.y,
            focus.r * 2 + margin,
          ]);
          return function (t) {
            zoomTo(i(t));
          };
        });

      transition
        .selectAll("foreignObject")
        .filter(function (d) {
          return d.parent === focus || this.style.display === "inline";
        })
        .style("opacity", function (d) {
          return d.parent === focus ? 1 : 0;
        })
        .on("start", function (d) {
          if (d.parent === focus) this.style.display = "inline";
        })

    }

    function zoomTo(v) {
      let k = diameter / v[2];
      view = v;
      node.attr("transform", function (d) {
        return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
      });
      circle.attr("r", function (d) {
        return d.r * k;
      });
    }

  });
}