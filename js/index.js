//----- Posiciones -----
let sectionPortada = document.getElementById("section-portada");
let posSectionPortadaBottom = sectionPortada.getBoundingClientRect().bottom;

//----- Nav ------
let headerLogo = document.getElementById("header-logo");


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