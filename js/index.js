//----- Posiciones -----
let sectionPortada = document.getElementById("section-portada");
let posSectionPortadaBottom = sectionPortada.getBoundingClientRect().bottom;

//----- Adaptación Header ------
let headerLogo = document.getElementById("header-logo");
let header = document.getElementById("header");
let logoMobile = document.getElementById("logo-mobile");
let menuButtonPart = document.getElementsByClassName("menu-button-part");
let headerMobile = document.getElementById("header-mobile");



//----- Animación Nav Responsive-----

let nav = document.getElementById("nav");
let menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", ()=>{
    if (nav.className == "nav-animation-in"){
        nav.className = "nav-animation-out";
    } else{
        nav.className = "nav-animation-in";
    }
    
});

//----- Animación scroll -----

window.onscroll = ()=>{
    if (window.pageYOffset > posSectionPortadaBottom){
        headerLogo.style.opacity = 1;
        header.classList.add("header-white");
        nav.classList.add("nav-color-grey");
        logoMobile.classList.add("logo-mobile-visible");
        for(let part of menuButtonPart){
            part.classList.add("menu-button-part-orange");
        }
        headerMobile.classList.add("header-mobile-visible");
    }
    if (window.pageYOffset < posSectionPortadaBottom){
        headerLogo.style.opacity = 0;
        header.classList.remove("header-white");
        nav.classList.remove("nav-color-grey");
        logoMobile.classList.remove("logo-mobile-visible");
        for(let part of menuButtonPart){
            part.classList.remove("menu-button-part-orange");
        }
        headerMobile.classList.remove("header-mobile-visible");
    }
};