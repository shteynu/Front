big.addEventListener("click",function () {
    big.classList.toggle("y");

})
small.addEventListener("click",function (e) {
    small.style.border = "10px solid pink";
    e.stopPropagation();
})