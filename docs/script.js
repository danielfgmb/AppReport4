// script.js
const appImage = document.getElementById('app-image');

// Function to change the app image
function changeAppImage(newImageSrc) {
  appImage.src = newImageSrc;
}

// Usage example: changeAppImage('new-image.jpg');
// Add event listeners for interaction (example using a button click)
const button = document.getElementById('your-button-id');

button.addEventListener('click', function() {
  // Change the app image when the button is clicked
  changeAppImage('new-image.jpg');
});


function animation_xd($e, xd = true){
  //AOS.refresh();
  if(xd){
    //console.log("entre1")
    
    $($e).animate({
      width: '100vh', // New width
      height: '100vh', // New height
    }, 3000, function () {  animation_xd($e, false) }); // Animation duration in milliseconds (1000ms = 1 second)
  
  }
  else{
    //console.log("entre2")
    $($e).animate({
      width: '180vh', // New width
      height: '140vh', // New height
    }, 5000, function () { animation_xd($e, true)}); // Animation duration in milliseconds (1000ms = 1 second)
    
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function random_perspective($e){
  console.log("rp",showing)
    if(!showing){
      var numberInRange25 = getRandomNumber(-30, 30);
      var numberInRange8 = getRandomNumber(-8, 8);
      //console.log("rp",numberInRange25,numberInRange8)
    $($e).delay(20000)
    .css("transform", 'rotateY('+numberInRange25+'deg) rotateX('+numberInRange8+'deg)')
    .animate({
      transform: 'rotateY('+numberInRange25+'deg) rotateX('+numberInRange8+'deg)', // New width
    }, 1000, function () { random_perspective($e, true)}); // Animation duration in milliseconds (1000ms = 1 second)
  }
}

function random_perspective_inmediato($e){
  if(!showing){
    var numberInRange25 = getRandomNumber(-30, 30);
    var numberInRange8 = getRandomNumber(-8, 8);
    
    console.log("rp",numberInRange25,numberInRange8)
  $($e).css("transform", 'rotateY('+numberInRange25+'deg) rotateX('+numberInRange8+'deg)'); // Animation duration in milliseconds (1000ms = 1 second)

}
}

function startPresentation(){
  console.log("startPres")
  $('body').css(
    "overflow-y","scroll")
  scrollToAnchor('#page1')
  
}

function scrollToAnchor(aid){
  $('html, body').animate({
      scrollTop: $(aid).offset().top
  }, 2000);
}




