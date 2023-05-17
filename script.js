//hover over max
charlie.addEventListener('mouseover', (event) => {
  charlieTooltip.style.visibility = "visible"
})
charlie.addEventListener("mouseout",(event) => {
    charlieTooltip.style.visibility = "hidden"})

//hover over olivia
emma.addEventListener('mouseover', (event) => {
  EmmaTooltip.style.visibility = "visible"
})
emma.addEventListener("mouseout",(event) => {
  EmmaTooltip.style.visibility = "hidden"})



//background color change
$(window).scroll(function() {
    // selectors
    var $window = $(window),
        $body = $('body')
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();



// scrollmagic starts here
// percentage bar
TweenLite.defaultEase = Linear.easeNone;
TweenMax.set(".dog", { yPercent: -100.25, xPercent: 0 });
const tween = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

const percent = document.querySelector(".percentage span");
tween.to(".dog", 1, { width: "26%" });

const scene = new ScrollMagic.Scene({
  triggerElement: ".pinDiv",
  triggerHook: "onLeave",
  duration: "80%"
})
  .setPin(".pinDiv")
  .setTween(tween)
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   name: ":The Dog"
  // })
  .addTo(controller);

function updatePercentage() {
  const initialWidth = 32; // initial percent
  const finalWidth = 26; // final percent
  const progress = tween.progress();
  const width = initialWidth - (progress * (initialWidth - finalWidth));
  percent.innerHTML = width.toFixed();

  const initialYear = 2018; // initial year
  const finalYear = 2021; // final year
  const year = initialYear + Math.round(progress * (finalYear - initialYear));
  document.querySelector('.year').textContent = year;

  const introScene = new ScrollMagic.Scene({
    triggerElement: ".pinDiv",
    triggerHook: "onLeave",
    duration: 0
  })
} 


// pin function
var controller2 = new ScrollMagic.Controller();

$(function () {
   // pin opening question
   var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger0", 
    triggerHook: "onLeave",
    duration: "25%"
  })
  .setPin("#pin0")
  // .addIndicators({name: "1 (duration: 300)"})
  .addTo(controller2);

  // pin financial concern
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1", 
    triggerHook: "onLeave",
    duration: "50%"
  })
  .setPin("#pin1")
  // .addIndicators({name: "1 (duration: 300)"})
  .addTo(controller2);

// pin dogs are popular
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger2", 
    triggerHook: "onLeave",
    duration: "50%"
  })
  .setPin("#pin2")
  // .addIndicators({name: "1 (duration: 300)"})
  .addTo(controller2);

// pin hook
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger3", 
    triggerHook: "onLeave",
    duration: "50%"
})
  .setPin("#pin3")
  // .addIndicators({name: "1 (duration: 300)"})
  .addTo(controller2);

// pin cost comparision
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger4", 
    triggerHook: "onLeave",
    duration: "75%"
})
  .setPin("#pin4")
  // .addIndicators({name: "1 (duration: 300)"})
  .addTo(controller2);

// pin svg
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger5", 
    triggerHook: "onLeave",
    duration: "100%"
})
  .setPin("#pin5")
  // .addIndicators({name: "1 (duration: 300)"})
  .addTo(controller2);

//pin the before image
new ScrollMagic.Scene({
  triggerElement: "#pin5",
  triggerHook: 0.9,
  duration:"90%",
  offset: 100,
})
.setClassToggle("#before-reveal","visible")
.addTo(controller2)

// pin 45%
var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger6", 
  triggerHook: "onLeave",
  duration: "20%"
})
.setPin("#pin6")
// .addIndicators({name: "pin6"})
.addTo(controller2);

// Create a new TweenMax instance
var tween = TweenMax.fromTo("#before-reveal", 1, {opacity: 1}, {opacity: 0});

// Create a new ScrollMagic scene
new ScrollMagic.Scene({
  triggerElement: "#pin6",
  triggerHook: 0.05,
  duration: "80%",
  offset: 100,
})
.setTween(tween) // Set the tween as the scene's animation
.addTo(controller2);

// pin 45%
var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger7", 
  triggerHook: "onLeave",
  duration: "20%"
})
.setPin("#pin7")
// .addIndicators({name: "pin7"})
.addTo(controller2);

  // Create a new TweenMax instance
var tween = TweenMax.fromTo("#after-reveal", 1, {opacity: 0}, {opacity: 1});

// Create a new ScrollMagic scene
new ScrollMagic.Scene({
  triggerElement: "#pin7",
  triggerHook: 0.9,
  duration: "90%",
  offset: 00,
})
.setTween(tween) // Set the tween as the scene's animation
.addTo(controller2);


// lifetime cost
var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger8", 
  triggerHook: "onLeave",
  duration: "50%"
})
.setPin("#pin8")
// .addIndicators({name: "pin8"})
.addTo(controller2);
});








