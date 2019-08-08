function toggleRed(){
    document.getElementsByClassName("first")[0]
        .classList.toggle("r");
}
function toggleBorder(){
    document.getElementsByClassName("first")[0]
        .classList.toggle("blue-border");
}
//document.getElementsByClassName("first")[0].onclick = toggleBorder;

document.getElementsByClassName("first")[0]
.addEventListener("click", toggleBorder);