let button=document.querySelector(".button");
let second_button=document.querySelector(".second-btn");
let third_button=document.querySelector(".third-btn");
let first=document.querySelector(".first");
let second=document.querySelector(".second");
let third=document.querySelector(".third");


button.addEventListener("click", () => {
    first.style="background-color: aqua";
    if (first.innerHTML === "") {
        first.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, illo atque! Aperiam placeat, omnis eius repudiandae minima tenetur nihil exercitationem optio, eos similique sed. At recusandae ullam repellendus beatae esse.";
    } else {
        first.innerHTML = "";
    }
});

second_button.addEventListener("click", () => {
    second.style="background-color: aqua";
    if (second.innerHTML === "") {
        second.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, illo atque! Aperiam placeat, omnis eius repudiandae minima tenetur nihil exercitationem optio, eos similique sed. At recusandae ullam repellendus beatae esse.";
    } else {
        second.innerHTML = "";
    }
});

third_button.addEventListener("click", () => {
    third.style="background-color: aqua";
    if (third.innerHTML === "") {
        third.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, illo atque! Aperiam placeat, omnis eius repudiandae minima tenetur nihil exercitationem optio, eos similique sed. At recusandae ullam repellendus beatae esse.";
    } else {
        third.innerHTML = "";
    }
});