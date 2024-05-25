let button = document.querySelector(".btn");
let new_para = document.querySelector(".newParagraph");

button.addEventListener("click", () => {
    let input = document.querySelector(".input").value;
    let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`;

    new_para.innerHTML = "";

    for (let i = 0; i < input; i++) {
        let para = document.createElement("p");
        para.className = "addPara";
        para.innerHTML = text;
        new_para.appendChild(para);
    }
});

