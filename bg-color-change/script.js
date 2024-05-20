let button=document.querySelector(".button");
let colorRGB=document.querySelector(".color");

button.addEventListener("click",()=>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    let color=`rgb(${r},${g},${b})`;
    colorRGB.innerHTML=color
    document.body.style.backgroundColor=color;
})