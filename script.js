const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});

document.getElementById('menu-btn').addEventListener('click', function () {
  var iconBars = this.querySelector('.fa-bars');
  var iconXmark = this.querySelector('.fa-circle-xmark');

  // If the bars icon is currently shown, hide it and show the xmark icon
  if (iconBars.classList.contains('fa-bars')) {
    iconBars.classList.remove('fa-bars');
    iconBars.classList.add('fa-circle-xmark');
    iconXmark.classList.remove('fa-circle-xmark');
    iconXmark.classList.add('fa-bars');
  } else { // If the xmark icon is currently shown, hide it and show the bars icon
    iconXmark.classList.remove('fa-bars');
    iconXmark.classList.add('fa-circle-xmark');
    iconBars.classList.remove('fa-circle-xmark');
    iconBars.classList.add('fa-bars');
  }
});



// js for video slider button(understand the code)

const btns = document.querySelectorAll(".slider-btn");
const slides = document.querySelectorAll(".video-section");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn)=>{
    btn.classList.remove("active");
  })
                                           /*removes the active class from the previous btn*/
  slides.forEach((slide)=>{
    slide.classList.remove("active");
  })
              
                             /*removes the active class from the previous btn*/
  contents.forEach((content)=>{
    content.classList.remove("active");
  })                                         /*removes the active class from the previous btn*/

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
  contents[manual].classList.add("active");
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    sliderNav(i);
  });
}

// script to add active class on click of navbar item
