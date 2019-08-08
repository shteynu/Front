const cont = document.getElementsByClassName("container")[0];

const tbl =document.createElement("table");

for(let i=0;i<8;i++){
    let row = tbl.insertRow();
    for(let j=0;j<8;j++){
        row.insertCell();
    }
}
cont.appendChild(tbl);