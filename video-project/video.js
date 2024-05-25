let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let video = document.querySelector('#myVideo');

video.play();
play.addEventListener('click',()=>{
    video.play();
})
pause.addEventListener('click',()=>{
    video.pause();
})