let allSection = document.querySelectorAll(".container");
let links = document.querySelectorAll(".link");

window.onscroll = () =>{
    allSection.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            links.forEach(link=>{
                link.classList.remove('active');
                if(link.getAttribute('href')===`#${id}`){
                    link.classList.add('active');
                }
                // document.querySelector(".link[href*='+ id + ']").classList.add('active');
            })
        }
    })
}