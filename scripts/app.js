let cart_data = JSON.parse(localStorage.getItem("cart_data")) || [];

function appendproducts(data, parent){
    data.forEach( (el) => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("id","product_image")
        image.src = el.url;

        let star = document.createElement("img");
        star.setAttribute("id", "star_image")

        if(el.rating == 4){
            star.src = "https://cdn.discordapp.com/attachments/945524831842095116/945981157395300402/4starratee.png"
        }
        else if(el.rating == 4.5){
            star.src = "https://cdn.discordapp.com/attachments/945524831842095116/945981157604990976/4.5starratee.png"
        }
        else if(el.rating == 5){
            star.src = "https://cdn.discordapp.com/attachments/945524831842095116/945981157860859924/5starratee.png"
        }

        let content_div = document.createElement("div");
        content_div.setAttribute("id", "prod_contenets");
        
        let heading = document.createElement("p");
        heading.innerText = el.heading;

        let price_div = document.createElement("div");
        price_div.style.display = "flex";

        let price = document.createElement("h4");
        price.innerText = `₹${el.price}`;

        let strikedprice = document.createElement("s");
        strikedprice.innerText = el.strikedprice;

        let uses = document.createElement("p");
        uses.innerText = `FOR ${el.use}`;

        let ingredients = document.createElement("p");
        ingredients.innerText = `WITH ${el.ingredients}`;

        let button = document.createElement("button");
        button.setAttribute("class", "prod_button");
        button.innerText = "Add To Cart";
        button.addEventListener("click", function(){
            addtoCart(el);
            alert("Added to Cart")
        })

        price_div.append(price, strikedprice);

        content_div.append(heading, price_div, uses, ingredients);

        div.append(image, star, content_div, button);


        parent.append(div);
    })
}

function addtoCart(el){
    cart_data.push(el);
    localStorage.setItem("cart_data", JSON.stringify(cart_data));
}

export default appendproducts;