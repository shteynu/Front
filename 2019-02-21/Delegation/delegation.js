let tbl = document.createElement("table");
tbl.classList.add("centered");

tbl.addEventListener("click",function (e) {
    let target = e.target;
    if(target.tagName != "TD") return;
    target.classList.toggle("r");
});

for(let i=0;i<10;i++){
    let row = tbl.insertRow();
    for(let j=0;j<10;j++){
       /* let cell = */row.insertCell();
        /*cell.addEventListener("click",toggleRed);*/
    }
}
document.body.appendChild(tbl);

/*
function toggleRed() {
    this.classList.toggle("r");
}*/
