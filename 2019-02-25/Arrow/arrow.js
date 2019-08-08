let angle = 0;
first.addEventListener("click", ()=>{
   /* first.classList.toggle("arrow-up");*/
    angle = (angle+15)%360;// чтобы если много раз нажмут чтобы вышел за пределы значения и не сработал при многократном нажатии;
    first.style.transform = "rotate("+angle+"deg)";
});