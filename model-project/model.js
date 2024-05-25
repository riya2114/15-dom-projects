let heading = document.querySelector('.heading');
let button = document.querySelector('.btn');
let close_button = document.querySelector('.close-icon');

button.addEventListener('click',()=>{
    heading.innerHTML="Modal Content";
    heading.classList.add('head');
    heading.classList.remove('heading')
    button.style.display='none';
    close_button.style.visibility='visible';
})
close_button.addEventListener('click',()=>{
    heading.innerHTML="Modal Project";
    heading.classList.add('heading');
    heading.classList.remove('head');
    button.style.display='block';
    close_button.style.visibility='hidden';
})