console.log("viewpord js");

let view_prod_container = document.getElementById("view_prod_container");
let prod_picture = document.getElementById("prod_picture");

let h2 = document.getElementById("prod_page_h2")
//h2.innerHTML = localStorage.getItem("title");
h2.innerHTML = sessionStorage.getItem("title");

let img = document.createElement("img");
//img.src = localStorage.getItem("loc")
img.src = sessionStorage.getItem("loc")


prod_picture.appendChild(img);
view_prod_container.appendChild(prod_picture);

let prod_details = document.getElementById("prod_details");
let prod_price = document.getElementById("prod_price");
//prod_price.innerHTML = localStorage.getItem("price");
prod_price.innerHTML = sessionStorage.getItem("price");


//localStorage.removeItem('title');
//localStorage.removeItem('price');
//localStorage.removeItem('loc');



var a_cart = document.getElementById("add_cart_btn");
var qty = document.getElementById("qty");

a_cart.onclick = function () {

    // localStorage.setItem(ct, data["women"][category.value][i].name + "," + data["women"][category.value][i].price + "," + "1");

    let str;
    if (localStorage.getItem("item") === null) {

        console.log("QTY::" + qty.value);
        // console.log(str)
        str = sessionStorage.getItem("title") + "^" + sessionStorage.getItem("price") + "^" + qty.value + "^" + sessionStorage.getItem("loc") + "#";
        localStorage.setItem("item", str);
    }

    else if (localStorage.getItem("item") !== null) {

        console.log("QTY::" + qty.value);

        str = localStorage.getItem("item");
        //  console.log(str)
        // str = str + data["women"][category.value][i].name + "^" + data["women"][category.value][i].price + "^" + "1" + "^" + data["women"][category.value][i].loc + "#";

        str = str + sessionStorage.getItem("title") + "^" + sessionStorage.getItem("price") + "^" + qty.value + "^" + sessionStorage.getItem("loc") + "#";
        // console.log(str);

        localStorage.setItem("item", str);

    }

}