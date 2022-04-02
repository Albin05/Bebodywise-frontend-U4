
import {navbar, footer} from "./components/navbar.js";


let navbar_div = document.getElementById("nav_container");
navbar_div.innerHTML = navbar();

let footer_content = document.getElementById("foot_cont");
footer_content.innerHTML = footer();

// Sliders Hair Skin Uti

const productContainers = [...document.querySelectorAll('.sproduct-container')];
const nxtBtn = [...document.querySelectorAll('.snxt-btn')];
const preBtn = [...document.querySelectorAll('.spre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});


// Doctor Health
const dhproductContainers = [...document.querySelectorAll('.dhproduct-container')];
const dhnxtBtn = [...document.querySelectorAll('.dhnxt-btn')];
const dhpreBtn = [...document.querySelectorAll('.dhpre-btn')];

dhproductContainers.forEach((dhitem, i) => {
    let containerDimensions = dhitem.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    dhnxtBtn[i].addEventListener('click', () => {
        dhitem.scrollLeft += containerWidth;
    })

    dhpreBtn[i].addEventListener('click', () => {
        dhitem.scrollLeft -= containerWidth;
    })
})

// Doctor experiences
const deproductContainers = [...document.querySelectorAll('.deproduct-container')];
const denxtBtn = [...document.querySelectorAll('.denxt-btn')];
const depreBtn = [...document.querySelectorAll('.depre-btn')];

deproductContainers.forEach((deitem, i) => {
    let containerDimensions = deitem.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    denxtBtn[i].addEventListener('click', () => {
        deitem.scrollLeft += containerWidth;
    })

    depreBtn[i].addEventListener('click', () => {
        deitem.scrollLeft -= containerWidth;
    })
})



// before after
const bfafproductContainers = [...document.querySelectorAll('.bfafproduct-container')];
const bfafnxtBtn = [...document.querySelectorAll('.bfafnxt-btn')];
const bfafpreBtn = [...document.querySelectorAll('.bfafpre-btn')];

bfafproductContainers.forEach((bfafitem, i) => {
    let containerDimensions = bfafitem.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    bfafnxtBtn[i].addEventListener('click', () => {
        bfafitem.scrollLeft += containerWidth;
    })

    bfafpreBtn[i].addEventListener('click', () => {
        bfafitem.scrollLeft -= containerWidth;
    })
})





// customer review
const custproductContainers = [...document.querySelectorAll('.customerpro-container')];
const custnxtBtn = [...document.querySelectorAll('.custnxt-btn')];
const custpreBtn = [...document.querySelectorAll('.custpre-btn')];

custproductContainers.forEach((cusitem, i) => {
    let containerDimensions = cusitem.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    custnxtBtn[i].addEventListener('click', () => {
        cusitem.scrollLeft += containerWidth;
    })

    custpreBtn[i].addEventListener('click', () => {
        cusitem.scrollLeft -= containerWidth;
    })
})

// bodywisehealth

const bhproductContainers = [...document.querySelectorAll('.health-container')];
const bhnxtBtn = [...document.querySelectorAll('.bhnxt-btn')];
const bhpreBtn = [...document.querySelectorAll('.bhpre-btn')];

bhproductContainers.forEach((bhitem, i) => {
    let containerDimensions = bhitem.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    bhnxtBtn[i].addEventListener('click', () => {
        bhitem.scrollLeft += containerWidth;
    })

    bhpreBtn[i].addEventListener('click', () => {
        bhitem.scrollLeft -= containerWidth;
    })
});