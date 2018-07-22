//----- Posiciones -----
let sectionPortada = document.getElementById("section-portada");
let sectionQuienes = document.getElementById("section-quienes");
let sectionVision = document.getElementById("section-vision");
let sectionEntrenamientos = document.getElementById("section-entrenamientos");
let sectionSumate = document.getElementById("section-sumate");

let posSectionPortadaBottom = sectionPortada.getBoundingClientRect().bottom;
let posSectionQuienes = sectionQuienes.getBoundingClientRect().top;
let posSectionVision = sectionVision.getBoundingClientRect().top;
let posSectionEntrenamientos = sectionEntrenamientos.getBoundingClientRect().top;
let posSectionSumate = sectionSumate.getBoundingClientRect().top;

//----- Links Nav y Scroll -----

let linkQuienes = document.getElementById("link-quienes");
let linkVision = document.getElementById("link-vision");
let linkEntrenamientos = document.getElementById("link-entrenamientos");
let linkSumate = document.getElementById("link-sumate");

function linking(button, section, plus=0){
    button.addEventListener("click", ()=>{
        window.scroll({
            top: section + plus,
            left: 0,
            behavior: 'smooth'
        });
        // setTimeout(()=>{
            nav.classList.add("nav-animation-out");
            logoMobile.classList.remove("logo-mobile-hide");
            logoMobile.classList.add("logo-mobile-show");
        // }, 300);
    });
}

linking(linkQuienes, posSectionQuienes);
linking(linkVision, posSectionVision);
linking(linkEntrenamientos, posSectionEntrenamientos, 50);
linking(linkSumate, posSectionSumate, 100);

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
        logoMobile.classList.remove("logo-mobile-hide");
        logoMobile.classList.add("logo-mobile-show");
    } else{
        nav.className = "nav-animation-in";
        logoMobile.classList.remove("logo-mobile-show");
        logoMobile.classList.add("logo-mobile-hide");
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