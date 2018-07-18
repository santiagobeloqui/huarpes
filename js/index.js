//----- Posiciones -----
let sectionPortada = document.getElementById("section-portada");
let posSectionPortadaBottom = sectionPortada.getBoundingClientRect().bottom;

//----- Adaptación Header ------
let headerLogo = document.getElementById("header-logo");
let header = document.getElementById("header");


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
    }
    if (window.pageYOffset < posSectionPortadaBottom){
        headerLogo.style.opacity = 0;
        header.classList.remove("header-white");
        nav.classList.remove("nav-color-grey");
    }
};