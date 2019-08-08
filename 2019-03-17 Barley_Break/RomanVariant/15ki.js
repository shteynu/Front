let lim = 16;   // number of cells in the game

let arr = [];
for (let i=1; i<lim; i++) arr.push(i);
arr.push(" ");
let rand = 0;
let counter = 0;
// shuffle:
for (let i=0; i<lim; i++) {
    rand = Math.floor(Math.random()*(lim-1));
    if (i==lim-1) rand = 6;  // number of empty cell || in the final - "rand" is always empty cell
    swap(i, rand);
}
fill();
function swap(a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function move(call){
    if (rand == call) return;
    counter++;
    cx.innerText = "          Attempts: " + counter;
    if (rand != call-1 && rand != call+1 && rand != call-4 && rand != call+4) return;
    if (call%4 == 3 && rand == call+1) return;
    if (call%4 == 0 && rand == call-1) return;
    swap(call, rand);
    rand = call;
    fill();
}

function fill(){
    t1.innerText = arr[0];
    t2.innerText = arr[1];
    t3.innerText = arr[2];
    t4.innerText = arr[3];
    t5.innerText = arr[4];
    t6.innerText = arr[5];
    t7.innerText = arr[6];
    t8.innerText = arr[7];
    t9.innerText = arr[8];
    t10.innerText = arr[9];
    t11.innerText = arr[10];
    t12.innerText = arr[11];
    t13.innerText = arr[12];
    t14.innerText = arr[13];
    t15.innerText = arr[14];
    t16.innerText = arr[15];
}

c1.addEventListener("mouseup", function () { move(0); } );
c2.addEventListener("mouseup", function () { move(1); } );
c3.addEventListener("mouseup", function () { move(2); } );
c4.addEventListener("mouseup", function () { move(3); } );
c5.addEventListener("mouseup", function () { move(4); } );
c6.addEventListener("mouseup", function () { move(5); } );
c7.addEventListener("mouseup", function () { move(6); } );
c8.addEventListener("mouseup", function () { move(7); } );
c9.addEventListener("mouseup", function () { move(8); } );
c10.addEventListener("mouseup", function () { move(9); } );
c11.addEventListener("mouseup", function () { move(10); } );
c12.addEventListener("mouseup", function () { move(11); } );
c13.addEventListener("mouseup", function () { move(12); } );
c14.addEventListener("mouseup", function () { move(13); } );
c15.addEventListener("mouseup", function () { move(14); } );
c16.addEventListener("mouseup", function () { move(15); } );
