console.log("hello")

let ele1 = document.getElementById("top_of_section-2");
let count = ele1.getBoundingClientRect().bottom;
console.log(screen.availHeight)

document.addEventListener('scroll' , function(){
    console.log(screenY);
if(ele1.getBoundingClientRect().y <= screen.availHeight){
    console.log(true);
    ele1.style.animation = 'fade 1s normal 0.5s forwards';
}
else if(ele1.getBoundingClientRect().bottom + ele1.getBoundingClientRect().height >= screen.availHeight){
    ele1.style.animation = 'unfade 1s normal 0.5s forwards';
    console.log(false);
}

})