let tbl = document.createElement("table");
tbl.classList.add("centered");

for(let i=1;i<11;i++){
    let row = tbl.insertRow();
    for(let j=1;j<11;j++){
        let cell = row.insertCell();
        cell.innerText = i*j;
        row.appendChild(cell);
    }
    tbl.appendChild(row);
}
document.body.appendChild(tbl);

getIJ(5,7);