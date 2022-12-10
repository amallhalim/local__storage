// select element 
let input = document.querySelector("#input_id");
let check = document.querySelector(".check");
let add = document.querySelector(".add");
let show = document.querySelector(".show");
let deletee = document.querySelector(".delete ");

let allspan = document.querySelectorAll(".buttons span ");
let result = document.querySelector(".result > span ");


allspan.forEach(element => {
    element.addEventListener("click",(e)=>{
        if (e.target.classList.contains("check")) {
                check_item();
            
        }
        if (e.target.classList.contains("add")) {
            add_item();
            
        }
        if (e.target.classList.contains("show")) {
            show_item();
            // show_item();
            
        }
        if (e.target.classList.contains("delete")) {
            delete_item();
            
        }
    })
});

/////// check input not empty
function show_message() {
    if (input.value ==="") {
        result.innerHTML=" please enter valid input"
    }
}

function check_item() {
    // console.log("check_item")ha
    // ensure that field has a value
    if (input.value !== "") {
        if (localStorage.getItem(input.value)) {
            result.innerHTML=`found local <span>  ${input.value}  <span>`
        }
        else {
            result.innerHTML=` !!! no found  local <span>  ${input.value}  <span>`;
        }
    }else{
        show_message();
    }
}

function add_item() {
    console.log("add_item")
    if (input.value !== "") {
    localStorage.setItem(input.value,"test")
    // we use "test"___>>as a default value for all key you enter it 
    result.innerHTML= `local storage add  <span> ${input.value}  </span> `
    input.value= "";
    }else{
        show_message();
    }
}

function delete_item() {
    console.log("delete_item")
    if (input.value !== "") {
        //first check present the element in the storage        
        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value)
            result.innerHTML=` local  are deleted <span>${input.value}<span>`
        }
        else {
            result.innerHTML=`no found  local <span>  ${input.value}  <span>`;
        }
        input.value= ""; 
    
    }else{
        show_message();
        }
}


function show_item() {
    // result.innerHTML="wwwwwwwwwwww"; 
    //if found items true if
    if (localStorage.length) {

        result.innerHTML=""; 
        // you need to make it empty 
        // result.innerHTML= `local storage  ==<span>${localStorage.length}</span> `
        // "key",,"value"====>>we loop for  it spearately to easy to use it and print it  
        for (let [key,value] of Object.entries(localStorage)) {  
            //+= to add all result not only final result  
            result.innerHTML += `<span class="key"> ${key} </span>    \n`;
            // result.innerHTML += `- <span class="key"> ${key}==>${value} </span>    \n`;
        }
            
    } else {
        result.innerHTML= `local storage empty !!!! is  ${localStorage.length}</span> `
        }

}


// window.localStorage.setItem("color","red");
// let a = window.localStorage.getItem("color");
// console.log(a);

// document.body.style.backgroundColor = a;

