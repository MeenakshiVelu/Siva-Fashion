console.log("kids js");



var search = document.getElementById("search");
var category = document.getElementById("category");
var price = document.getElementById("price");

var btn = document.getElementById("btn");
var ct = 1;


btn.addEventListener("click", prod_disp);

function prod_disp() {

    fetch("./prod/products.json")
    // fetch("../siva_fashion/products.json")
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            console.log(price.value)

            let p = Number(price.value)

            let iprice;

            let kids_allprod = document.getElementById("kids_allprod");



            if (category.value !== "all") {
                kids_allprod.innerHTML = "";
                for (let i in data["kids"][category.value]) {

                    iprice = Number(data["kids"][category.value][i].price.substr(1, 3))


                    if (iprice >= p && iprice <= (p + 10)) {

                        //console.log(data["kids"][category.value][i].name);

                        let div_card = document.createElement("div");
                        div_card.className = "kids_card";


                        let img = document.createElement("img");
                        img.src = data["kids"][category.value][i].loc;

                        let a = document.createElement("a");
                        let linkText = document.createTextNode(data["kids"][category.value][i].name);
                        a.appendChild(linkText);
                        a.title = data["kids"][category.value][i].name;
                        a.href = "./view_prod.html";


                        let p = document.createElement("p");
                        let p_text = document.createTextNode(data["kids"][category.value][i].price);
                        p.appendChild(p_text);


                        a.addEventListener("click", () => {

                            sessionStorage.setItem("title", data["kids"][category.value][i].name);
                            sessionStorage.setItem("price", data["kids"][category.value][i].price);
                            sessionStorage.setItem("loc", data["kids"][category.value][i].loc);
                            a.href = "./view_prod.html";

                        })


                        let a_cart = document.createElement("a");
                        let linkText_cart = document.createTextNode("");
                        // let linkText_cart = document.createTextNode("./cart.html");
                        a_cart.appendChild(linkText_cart);
                        a_cart.classList.add("add_to_cart");
                        a_cart.href = "./cart.html";
                      
                    

                        let img_cart = document.createElement("img");
                        img_cart.src = "./images/add_to_cart.png";
                        a_cart.appendChild(img_cart);

                        a_cart.onclick = function () {

                            // localStorage.setItem(ct, data["kids"][category.value][i].name + "," + data["kids"][category.value][i].price + "," + "1");

                            // ct++;


                            let str;
                            if (localStorage.getItem("item") === null) {
                                str = data["kids"][category.value][i].name + "^" + data["kids"][category.value][i].price + "^" + "1" + "^" + data["kids"][category.value][i].loc + "#";

                                console.log(str)
                                localStorage.setItem("item", str);
                                
                              
                            }

                            else if (localStorage.getItem("item") !== null) {
                                str = localStorage.getItem("item");
                                console.log(str)
                                str = str + data["kids"][category.value][i].name + "^" + data["kids"][category.value][i].price + "^" + "1" + "^" + data["kids"][category.value][i].loc + "#";


                                localStorage.setItem("item", str);
                                
                               

                            }





                        }



                        div_card.appendChild(img)
                        // div_card.appendChild(h6)
                        div_card.appendChild(a)
                        div_card.appendChild(p)
                        // div_card.appendChild(btn)
                        div_card.appendChild(a_cart)

                        kids_allprod.appendChild(div_card);


                    }

                }



            }
            else {
                kids_allprod.innerHTML = "";
                // for (let j of ["kids", "women", "men"]) {
                //     for (let i in data[j][category.value]) {

                for (let i of ["kids"]) {
                    for (let j of ["tshirts", "pants", "hats"]) {
                        for (let k of data[i][j]) {
                            // console.log(k.name);

                            iprice = Number(k.price.substr(1, 3))


                            if (iprice >= p && iprice <= (p + 10)) {

                                //console.log(data["kids"][category.value][i].name);

                                let div_card = document.createElement("div");
                                div_card.className = "kids_card";


                                let img = document.createElement("img");
                                img.src = k.loc;
                                /* -------------------------------------------------------------------------------*/

                                let a = document.createElement("a");
                                // let linkText = document.createTextNode(data["kids"][category.value][i].name);
                                let linkText = document.createTextNode(k.name);
                                a.appendChild(linkText);
                                // a.title = data["kids"][category.value][i].name;
                                a.title = k.name;
                                a.href = "./view_prod.html";


                                let p = document.createElement("p");
                                // let p_text = document.createTextNode(data["kids"][category.value][i].price);
                                let p_text = document.createTextNode(k.price);
                                p.appendChild(p_text);


                                a.addEventListener("click", () => {

                                    //  sessionStorage.setItem("title", data["kids"][category.value][i].name);
                                    sessionStorage.setItem("title", k.name);
                                    sessionStorage.setItem("price", k.price);
                                    sessionStorage.setItem("loc", k.loc);
                                    a.href = "./view_prod.html";

                                })


                                let a_cart = document.createElement("a");
                                let linkText_cart = document.createTextNode("");
                                a_cart.appendChild(linkText_cart);
                                a_cart.classList.add("add_to_cart");
                                a_cart.href = "./cart.html";
                              



                                let img_cart = document.createElement("img");
                                img_cart.src = "./images/add_to_cart.png";
                                a_cart.appendChild(img_cart);
                                

                                a_cart.onclick = function () {

                                    // localStorage.setItem(ct, k.name + "," + k.price + "," + "1");

                                    // ct++;

                                    let str;
                                    if (localStorage.getItem("item") === null) {
                                        //str = data["women"][category.value][i].name + "^" + data["women"][category.value][i].price + "^" + "1" + "^" + data["women"][category.value][i].loc + "#";
                                        str = k.name + "^" + k.price + "^" + "1" + "^" + k.loc + "#";
                                        //  arr.push([str])
                                        //let arr = new Array(str);

                                        console.log(str)
                                        localStorage.setItem("item", str);
                                        
                                        
                                    }

                                    else if (localStorage.getItem("item") !== null) {
                                        str = localStorage.getItem("item");
                                        console.log(str)
                                        str = str + k.name + "^" + k.price + "^" + "1" + "^" + k.loc + "#";


                                        localStorage.setItem("item", str);
                                       

                                    }


                                }



                                div_card.appendChild(img)
                                // div_card.appendChild(h6)
                                div_card.appendChild(a)
                                div_card.appendChild(p)
                                // div_card.appendChild(btn)
                                div_card.appendChild(a_cart)

                                kids_allprod.appendChild(div_card);




                            }
                        }
                    }


                }

            }


        })



    document.getElementById("kids_banner").style.display = "none";
    document.getElementById("kids_leftside").style.display = "block";


}










