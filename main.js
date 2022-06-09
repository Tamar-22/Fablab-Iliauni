function imgslider(anything){
    document.getElementById("mySlides").src = anything;
}

//header-carusel
function currentDiv(n) {
    showDivs(slideIndex = n);

  }
  function showDivs(n) {
    
    let i;
    let x = document.getElementsByClassName("mySlides");
    
    
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

  //next prev buttons

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active1";  
}


let burgerNavigationOpen = document.getElementById("burger-bar-open")
let burgerNavigationClose = document.getElementById("burger-bar-close")
let burgerNavigation = document.getElementById("menu-block")
let searchForm = document.getElementById("search-form")

//service-dropdown
document.getElementById("service-menu").addEventListener('mouseout', openServiceMenu)
document.getElementById("service-menu").addEventListener('mouseover', openServiceMenu)

function openServiceMenu (){
    document.getElementById("service-dropdown").classList.toggle("active")
}

//news-dropdown
document.getElementById("news-menu").addEventListener('mouseout', openNewsMenu)
document.getElementById("news-menu").addEventListener('mouseover', openNewsMenu)

function openNewsMenu (){
    document.getElementById("news-dropdown").classList.toggle("active")
}

const burgerOpen =()=>{
    burgerNavigationOpen.style.display = "none"
    burgerNavigationClose.style.display = "block"
    burgerNavigation.style.display = "block"
    searchForm.style.display="block"
}

const burgerClose =()=>{
    burgerNavigationOpen.style.display = "block"
    burgerNavigationClose.style.display = "none"
    burgerNavigation.style.display = "none"
    searchForm.style.display="none"
}

burgerNavigationOpen.addEventListener("click", burgerOpen)
burgerNavigationClose.addEventListener("click", burgerClose)


let sliderMain = document.getElementById("slider-main")
let child = sliderMain.getElementsByClassName("child")
function moveRight(){
  sliderMain.append(child[0])
}
function moveLeft(){
  sliderMain.prepend(child[child.length-1])
}
