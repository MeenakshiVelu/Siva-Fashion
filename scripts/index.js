console.log("hekllo")

const kids = document.getElementsByClassName("pic_head")[0];
const women = document.getElementsByClassName("pic_head")[1];
const men = document.getElementsByClassName("pic_head")[2];


kids.addEventListener("mouseenter",(e)=>{
    e.currentTarget.style.backgroundColor ="green";
    
    
});

kids.addEventListener("mouseleave",(e)=>{
    e.currentTarget.style.backgroundColor ="grey";
   
})

women.addEventListener("mouseenter",(e)=>{
    e.currentTarget.style.backgroundColor ="green";
    document.getElementById("pic").children[1].style.zIndex = 1;
    document.getElementById("pic").children[0].style.zIndex = -1;
    
    
});

women.addEventListener("mouseleave",(e)=>{
    e.currentTarget.style.backgroundColor ="grey";
    document.getElementById("pic").children[1].style.zIndex = -1;
    document.getElementById("pic").children[0].style.zIndex = 1;
})


men.addEventListener("mouseenter",(e)=>{
    e.currentTarget.style.backgroundColor ="green";
    document.getElementById("pic").children[2].style.zIndex = 1;
    document.getElementById("pic").children[0].style.zIndex = -2;
    
    
});

men.addEventListener("mouseleave",(e)=>{
    e.currentTarget.style.backgroundColor ="grey";
    document.getElementById("pic").children[2].style.zIndex = -2;
    document.getElementById("pic").children[0].style.zIndex = 1;
})

console.log("jhkj")
fetch("../siva_fashion/products.json")
    .then(response => response.json())
    .then((data)=>{display(data) });    



function display(prod){
    console.log(typeof(prod["kids"]["hats"][0].loc))
    console.log(prod["kids"]["hats"][0].loc);

}

// let arr =[];
// if(localStorage.getItem("item")===null){
  
//     localStorage.setItem("item",arr);
// }
