import appendproducts from "./scripts/app.js"
import {navbar, footer} from "./components/navbar.js";


let navbar_div = document.getElementById("nav_container");
navbar_div.innerHTML = navbar();

let footer_content = document.getElementById("foot_cont");
footer_content.innerHTML = footer();


// Page loading

let parent = document.getElementById("prod_container");

let url = "http://ec2-35-175-148-113.compute-1.amazonaws.com:5000/hair";

const data = await getData(url);

console.log(data);

appendproducts(data, parent);

let prod_description = document.getElementById("prod_details");
prod_description.innerText = "Shop Hair Solutions";

let prod_count = document.getElementById("prod_count");
prod_count.innerText = `${data.length} products`;

// Style changes

let prod_topbutton = document.getElementById("hair_prod");
prod_topbutton.style.backgroundColor = "#66509a";
prod_topbutton.style.color = "#ffffff";

let prod_addcartbtn = document.querySelectorAll(".prod_button");

for(let i = 0; i<prod_addcartbtn.length; i++){
    
    prod_addcartbtn[i].style.backgroundColor = "#66509a";
    prod_addcartbtn[i].style.color = "#ffffff"
}


let prod_textcont_count = document.getElementById("prod_topsection");
prod_textcont_count.style.color = "#66509a";

let prod_type_selector = document .getElementById("prod_right");
prod_type_selector.style.border = "1px solid #66509a";

// Functions for button clicks

let hair_cont = document.getElementById("hair_prod");
hair_cont.addEventListener("click", hairprod);


async function hairprod(){
    
    parent.innerHTML = "";

    let url = "http://ec2-35-175-148-113.compute-1.amazonaws.com:5000/hair";

    let data = await getData(url);

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "Shop Hair Solutions";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;


}

let skin_cont = document.getElementById("skin_prod");
skin_cont.addEventListener("click", skinprod);


async function skinprod(){

    parent.innerHTML = "";

    let url = "http://ec2-35-175-148-113.compute-1.amazonaws.com:5000/skin";

    let data = await getData(url);

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "Shop Skin Solutions";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;
    
}

let weight_cont = document.getElementById("weight_prod");
weight_cont.addEventListener("click", weightprod);

async function weightprod(){

    parent.innerHTML = "";

    let url = "http://ec2-35-175-148-113.compute-1.amazonaws.com:5000/weight";

    let data = await getData(url);

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "Shop Weight Management Solutions";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;
    
}

let pcos_cont = document.getElementById("pcos_prod");
pcos_cont.addEventListener("click", pcosprod);

async function pcosprod(){

    parent.innerHTML = "";

    let url = "http://ec2-35-175-148-113.compute-1.amazonaws.com:5000/pcos";

    let data = await getData(url);

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;
    
}

let feminine_cont = document.getElementById("feminine_prod");
feminine_cont.addEventListener("click", feminineprod);

async function feminineprod(){

    parent.innerHTML = "";

    let url = "http://ec2-35-175-148-113.compute-1.amazonaws.com:5000/femcare";

    let data = await getData(url);

    appendproducts(data, parent);

    let prod_description = document.getElementById("prod_details");
    prod_description.innerText = "";

    let prod_count = document.getElementById("prod_count");
    prod_count.innerText = `${data.length} products`;
    
}


async function getData(url){
    try{
        let res = await fetch(url);

        let data = await res.json();

        return data;
    }
    catch(error){
        console.log(error);
    }
};


    
    

