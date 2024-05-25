let button = document.querySelector(".btn");
let input = document.querySelector(".input");
let toDoList = document.querySelector(".to-do-list");
let clearButton = document.querySelector(".clear");

button.addEventListener("click",()=>{
    if (input.value !== ""){
        let newItem = document.createElement("div");
        newItem.classList.add("item");

        let itemText = document.createElement("p");
        itemText.innerHTML = input.value;

        let iconsDiv = document.createElement("div");
        iconsDiv.classList.add("icons");

        let editIcon = document.createElement("i");
        editIcon.classList.add("fa-solid","fa-pen-to-square","edit");
        editIcon.addEventListener("click",()=>{
        input.value = itemText.innerHTML;
        newItem.remove();
        clearAll();
        });
        let trashIcon = document.createElement("i");
        trashIcon.classList.add("fa-solid","fa-trash");
        trashIcon.addEventListener("click",()=>{
        newItem.remove();
        clearAll();
        });
        iconsDiv.appendChild(editIcon);
        iconsDiv.appendChild(trashIcon);

        newItem.appendChild(itemText);
        newItem.appendChild(iconsDiv);

        toDoList.appendChild(newItem);
        input.value = "";
        clearButton.style.visibility='visible';
    }
});
clearButton.addEventListener('click',()=>{
    toDoList.innerHTML="";
    clearAll();
})
let clearAll=()=>{
    if(toDoList.children.length>0){
        clearButton.style.visibility='visible';
    }
    else{
        clearButton.style.visibility='hidden';
    }
};
