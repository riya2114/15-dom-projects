// document.addEventListener('DOMContentLoaded', (event) => {
    let increment = document.querySelector(".inc");
    let decrement = document.querySelector(".dec");
    let reset = document.querySelector(".reset");
    let counter = document.querySelector(".counter");

    increment.addEventListener("click", () => {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    });

    decrement.addEventListener("click", () => {
        if(parseInt(counter.innerHTML)===0){
            counter.innerHTML=0
        }
        else{
            counter.innerHTML = parseInt(counter.innerHTML) - 1;
        }
    });

    reset.addEventListener("click", () => {
        counter.innerHTML = 0;
    });
// });
