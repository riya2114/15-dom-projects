let menu_icon=document.querySelector(".menu-icon");
let sidebar=document.querySelector(".sidebar");
let close_icon=document.querySelector(".fa-xmark");

menu_icon.addEventListener("click",()=>{
    sidebar.classList.remove("hidden");
    sidebar.classList.add("visible");
})
close_icon.addEventListener("click",()=>{
    sidebar.classList.remove("visible");
    sidebar.classList.add("hidden");
})