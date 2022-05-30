function imgslider(anything){
    document.getElementById("slider-img").src = anything;
}


let burgerNavigationOpen = document.getElementById("burger-bar-open")
let burgerNavigationClose = document.getElementById("burger-bar-close")
let burgerNavigation = document.getElementById("nav-flex")

const burgerOpen =()=>{
    burgerNavigationOpen.style.display = "none"
    burgerNavigationClose.style.display = "block"
    burgerNavigation.style.display = "block"
}

const burgerClose =()=>{
    burgerNavigationOpen.style.display = "block"
    burgerNavigationClose.style.display = "none"
    burgerNavigation.style.display = "none"
}

burgerNavigationOpen.addEventListener("click", burgerOpen)
burgerNavigationClose.addEventListener("click", burgerClose)