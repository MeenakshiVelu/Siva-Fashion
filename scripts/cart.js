
// console.log("cart.js")


var cart_prod_card, div_cart_prod_card, div_cart_text, div_cart_prod_pic, div_cart_prod_name_details, div_cart_prod_qty, div_cart_prod_price, cart_container;

var x, z, t, x1, t1;

var op;
var item, arr;
item = localStorage.getItem("item");


display();


function display() {
    var tot = 0 ;

    document.getElementById("cart_container").innerHTML = "";

    item = localStorage.getItem("item");

    if (!item) {
        document.getElementById("cart_container").innerHTML = `<h2 style=color:black;text-align:center;">Cart is empty</h2>`;
        document.getElementById("cart_bottom").style.visibility  = "hidden";
        return;
    }
    arr = item.split("#");

    cart_container = document.getElementById("cart_container");


    for (let m = arr.length - 1; m >= 0; m--) {

        if (arr[m]) {
            console.log(arr[m].split("^")[0]); //name
            // console.log(arr[m].split("^")[1]); //price
            // console.log(arr[m].split("^")[2]); //qty
            // console.log(arr[m].split("^")[3]); //loc

            div_cart_prod_card = document.createElement("div");
            div_cart_text = document.createTextNode("");
            div_cart_prod_card.appendChild(div_cart_text);
            div_cart_prod_card.setAttribute("class", "cart_prod_card");


            div_cart_prod_pic = document.createElement("div");
            div_cart_text = document.createTextNode("");
            div_cart_prod_pic.appendChild(div_cart_text);
            div_cart_prod_pic.className = "cart_prod_pic";


            cart_prod_img = document.createElement("img");
            cart_prod_img.src = arr[m].split("^")[3];
            div_cart_prod_pic.appendChild(cart_prod_img);

            //div_cart_prod_card.appendChild(div_cart_prod_pic);


            div_cart_prod_name_details = document.createElement("div");
            div_cart_text = document.createTextNode("");
            div_cart_prod_name_details.appendChild(div_cart_text);
            div_cart_prod_name_details.setAttribute("class", "cart_prod_name_details");



            cart_h3 = document.createElement("h3");
            div_cart_text = document.createTextNode(arr[m].split("^")[0]);
            cart_h3.appendChild(div_cart_text);
            div_cart_prod_name_details.appendChild(cart_h3);

            // cart_prod_qty
            div_cart_prod_qty = document.createElement("div");
            div_cart_text = document.createTextNode("");
            div_cart_prod_qty.appendChild(div_cart_text);
            div_cart_prod_qty.setAttribute("class", "cart_prod_qty");


            x1 = document.createElement("span");
            t1 = document.createTextNode("Quantity");
            x1.appendChild(t1);
            x1.setAttribute("class", "label");
            div_cart_prod_qty.appendChild(x1);


            x = document.createElement("select");
            x.setAttribute("class", "mySelect");


            for (let i = 0; i < 5; i++) {

                op = document.createElement("option");
                op.text = i;
                x.options.add(op, i);

            }


            x.selectedIndex = arr[m].split("^")[2];

            div_cart_prod_qty.appendChild(x);
            div_cart_prod_name_details.appendChild(div_cart_prod_qty);


            z = document.createElement("button");
            z.classList.add("delete_btn", "btn", "btn-danger")
            t = document.createTextNode("Delete");
            z.appendChild(t);
            div_cart_prod_name_details.appendChild(z);


            let pp;
            div_cart_prod_price = document.createElement("div");
            div_cart_prod_price.setAttribute("class", "cart_prod_price");
            pp = Number(arr[m].split("^")[1].slice(1)) * Number(arr[m].split("^")[2]);

            tot = tot + pp;

            pp = "$" + pp;
            t = document.createTextNode(pp);
            div_cart_prod_price.appendChild(t);


            div_cart_prod_card.appendChild(div_cart_prod_pic);
            div_cart_prod_card.appendChild(div_cart_prod_name_details);
            div_cart_prod_card.appendChild(div_cart_prod_price);


            cart_container.appendChild(div_cart_prod_card);


            x.onchange = function (e) {

                let str1, b, newarr, a;

                a = localStorage.getItem("item");
                console.log(item)

                str1 = arr[m];

                newarr = str1.split("^");
                newarr.splice(2, 1, e.currentTarget.value);

                b = newarr.join("^");
                a = a.replace(str1, b);

                localStorage.setItem("item", a);
                display();


            }


            z.addEventListener("click", () => {

                let a = localStorage.getItem("item")

                let rep_str = arr[m] + "#";

                a = a.replace(rep_str, "");

                localStorage.setItem("item", a);
                if (localStorage.getItem("item").length === 0) {
                    localStorage.removeItem("item");
                    document.getElementById("total").innerHTML = "";
                }
                display();

            })


        }

    }
    // console.log(tot);

    document.getElementById("total").innerHTML = "Subtotal:    "+"$" + tot;


}



