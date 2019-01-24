$("#handle1").roundSlider({
    sliderType: "min-range",
    editableTooltip: false,
    radius: 105,
    width: 16,
    value: 75,
    handleSize: 0,
    handleShape: "square",
    circleShape: "pie",
    startAngle: 315,
    tooltipFormat: "changeTooltip"
});
$("#handle2").roundSlider({
    sliderType: "min-range",
    editableTooltip: false,
    radius: 105,
    width: 16,
    value: 85,
    handleSize: 0,
    handleShape: "square",
    circleShape: "pie",
    startAngle: 315,
    tooltipFormat: "changeTooltip"
});

// function changeTooltip(e) {
//     var val = e.value, speed;
//     if (val < 20) speed = "Slow";
//     else if (val < 40) speed = "Normal";
//     else if (val < 70) speed = "Speed";
//     else speed = "Very Speed";

//     return val + " km/h" + "<div>" + speed + "<div>";
// }

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});


 $(".main").tiltedpage_scroll({
    sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
    angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
    opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
    scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
    outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
  });


 $('.center').slick({
  centerMode: true,
  centerPadding: '136px',
  slidesToShow: 3,
  nextArrow: '<i class="fas fa-chevron-circle-right c_rightarrow"></i>',
  prevArrow: '<i class="fas fa-chevron-circle-left c_leftarrow"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.view').magnificPopup({
  type: 'image',
  gallery:{
    enabled: true
  },
});
