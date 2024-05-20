document.addEventListener('DOMContentLoaded', () => {
let menu=document.querySelector(".menu-icon");
let list=document.querySelector(".unordered-list");

menu.addEventListener("click",()=>{
    list.classList.toggle("active")
})});