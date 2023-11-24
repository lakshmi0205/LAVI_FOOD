 function myFun(){
    let searchval = document.getElementById("inp").value.toUpperCase();
    console.log(searchval);
    let table = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");

    let front = document.querySelector(".mainPage");

    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let text = td.innerText;
            if(text.toUpperCase().indexOf(searchval) > -1){
                tr[i].style.display=""
                front.style.display="none"
            }else{
                tr[i].style.display="none"
                 


            }
        }
    }

    if(searchval == ""){
        front.style.display="flex"

    }
 }


//  nav

function showLogin(){
    let login = document.querySelector(".log");
    login.style.display="block"
    let nav = document.querySelector(".nav");
    nav.style.display="none"


}


function showNav(){
    let nav = document.querySelector(".nav");
    nav.style.display="block"
    let login = document.querySelector(".log");
    login.style.display="none"

}

function login(){
    let login = document.querySelector(".log");
    login.style.display="none"
}


function nav(){
    let nav = document.querySelector(".nav");
    nav.style.display="none"
}



//  IMAGE SLIDER

let cust = document.querySelectorAll(".customer");
let count = 0;
console.log(cust);

cust.forEach(function(review, index){
    review.style.left=`${index * 100}%`
    console.log(review);
    console.log(index);

})


function prev(){
    count --;
    if(count == -1){
        count = cust.length - 1;
    }
    slide();

}

function next(){
    count ++;
    if(count == cust.length){
        count=0;
    }
    slide();
}

function slide(){
    cust.forEach(function(review){
        review.style.transform=`translateX(-${count * 100}%)`;
        console.log( review.style.transform=`translateX(-${count * 100}%)`);
    })
}




let addCart = document.querySelectorAll("#addCart");
let removeCart = document.querySelectorAll("#removeCart");
let cartNum = document.getElementById("cartNum");
let chefs = document.querySelectorAll(".chefCard");
let user = document.getElementById("user")

let num = 0;

addCart.forEach(function(addToCart){
    addToCart.addEventListener("click", function(){
        num++;
        cartNum.innerHTML=num;
    })
})


removeCart.forEach(function(removeToCart){
    removeToCart.addEventListener("click", function(){
        num--;
        if(num > 0){
        cartNum.innerHTML=num;
        }
    })
})

// chefs
chefs.forEach(function(card){
    card.addEventListener("click", function(){
        console.log(card);

        let div = document.createElement("div");
        div.classList.add("textChef");
        document.querySelector(".chefData").style.display="block"
        document.querySelector(".chefDetail").innerHTML=""
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <p>Our Top Chefs</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est fugiat velit sed, optio atque officiis voluptatibus dolorem ab nisi blanditiis. Labore?</p>

        </div>
        `
        document.getElementById("closeBtn").addEventListener("click", function(){
            document.querySelector(".chefData").style.display="none"
        })
        document.querySelector(".chefDetail").appendChild(div)
    })
})

// login
user.addEventListener("click", function(){
     document.querySelector(".loginPage").classList.toggle("showData")

})

document.getElementById("loginBtn").addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" & pass.value == ""){
        alert("Enter Detail")
    }else{
        alert("You Logged IN")
    }

})