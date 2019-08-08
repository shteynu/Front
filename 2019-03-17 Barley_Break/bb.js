let tbl = document.createElement("table");
tbl.classList.add("centered");
let ar = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];
shuffle(array);
let counter=0;
let elements = document.getElementsByTagName("td");

for(let i=0;i<4;i++){
    let row = tbl.insertRow();
    for(let j=0;j<4;j++){
        let cell = row.insertCell();
        row.appendChild(cell);
    }
    tbl.appendChild(row);
}
document.body.appendChild(tbl);
fill();

function fill() {
    for (let i = 0; i < elements.length; i ++){
        elements[i].innerText = array[i];
    }
}

for (let i = 0; i < elements.length; i ++){
    elements[i].addEventListener("click",function (){
        game(i);
    });
}

function change(n,m){
    let a = document.getElementsByTagName("td");
    let af = a[n].innerText;
    a[n].innerText = a[m].innerText;
    a[m].innerText = af;
}

function game(n){
    let f = document.getElementsByTagName("td");
    let sub=0;
    for(let i=0;i<f.length;i++){
        if(f[i].innerText == ""){
            sub=f[i];
        }
    }
    if ((n % 4 != 3) && (f[n+1] == sub)) change(n, n + 1);
    if ((n % 4 != 0) && (f[n-1] == sub)) change(n, n - 1);
    if ((n <= 11) && (f[n+4]== sub)) change(n, n + 4);
    if ((n >= 4) && (f[n-4] == sub)) change(n, n - 4);
}

