let data = JSON.parse(localStorage.getItem("cart_data")) || [];

let parent = document.getElementById("cart_prod_cont");

var body = document.getElementsByTagName("body")[0];

if(data.length == 0){
    body.innerHTML = "";

    let div_cart = document.createElement("div");
    div_cart.setAttribute("id", "cart_empty_msg");

    let hello = document.createElement("img");
    hello.src = "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_100,c_limit/v1620122159/staging/Home/Images/image_13.png";
    
    let empty_heading = document.createElement("h1");
    empty_heading.innerHTML = "Your Personal Health Briefcase is empty!";

    let description = document.createElement("p");
    description.innerHTML = "Add products to cart and begin your wellness journey now";

    div_cart.append(hello, empty_heading, description);
    body.append(div_cart);
}
else{
    appendcartdata();
}


    





function appendcartdata(){

    data.forEach( (el, index) => {

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.url;

        let subdiv = document.createElement("div");

        let heading = document.createElement("h4");
        heading.innerText = el.heading;

        let price_div = document.createElement("div");
        price_div.style.display = "flex";

        let price = document.createElement("h4");
        price.innerText = `₹${el.price}`;

        let strikedprice = document.createElement("s");
        strikedprice.innerText = el.strikedprice;

        price_div.append(price, strikedprice);

        let button = document.createElement("button");
        button.setAttribute("class", "cart_button");
        button.innerText = "Remove from Cart";
        button.addEventListener("click", function(){
            removefromCart(index);
            calculations(el);
        });

        subdiv.append(heading, price_div, button);

        div.append(image, subdiv)
        parent.append(div);

        
        calculations(el);

    })
}





function removefromCart(index){

    
    data = JSON.parse(localStorage.getItem("cart_data")) || [];
    data.splice(index, 1);
    
    localStorage.setItem("cart_data", JSON.stringify(data));

    parent.innerHTML = "";
    appendcartdata();
}

var savings_total = 0;

function calculations(el){

    let striked_sum = (el) =>{
        if(el.strikedprice == null){
            return el.price;
        }
        else{
            return el.strikedprice;
        }
    }

    let product_count = data.length;

        let grandtotal = data.reduce(function (ac, el) {
            return ac + Number(el.price);
        }, 0);
        
        let strikedprice_total = data.reduce(function (ac, el) {
            return ac + Number(striked_sum(el));
        }, 0);

        savings_total = strikedprice_total - grandtotal;
       

        let items = document.getElementsByClassName("cart_items");
        for(let i = 0; i<items.length; i++){
            items[i].innerHTML = product_count;
        }

        
        let cart_subtotal = document.getElementById("cart_subtotal");
        cart_subtotal.innerText = `₹${strikedprice_total}`;

        let to_pay_total = document.getElementsByClassName("cart_grand_total");
        for(let k = 0; k<to_pay_total.length; k++){
            to_pay_total[k].innerHTML = `₹${grandtotal}`;
        }

        let customer_savings = document.getElementsByClassName("customer_savings");
        for(let m = 0; m<customer_savings.length; m++){
            customer_savings[m].innerHTML = `₹${savings_total}`;
        }

}


// function promocode(){

// }
