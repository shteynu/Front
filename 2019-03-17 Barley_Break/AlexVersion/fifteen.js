let squares = [];
for (let i = 0; i < 16; i++){
    let sq = document.createElement("div");
    sq.classList.add("sq");
    if (i < 15) {
        sq.classList.add("full");
        sq.innerText = i+1;
    }
    else {
        sq.classList.add("empty");
        sq.innerText = "";
    }
    squares.push(sq);
}

let sixteen = squares[15];
shuffle(squares);


for (let i=0; i<4; i++){
    for(let j=0; j<4; j++){
        let sq = squares[i*4+j];
        sq.i = i;
        sq.j = j;
        let st = sq.style;
        st.left = j*100+"px";
        st.top = i*100+"px";
    }
}

let block = false;

squares.forEach((e)=>{
    e.addEventListener("click",function(){
        if(block)return;
        if (this.innerText == "") return;
        if (isMovable(this)){
            swapElem(this);
            block = true;
        }
        return;
    })

    e.addEventListener("transitionend", function(){block = false;})
    cont.appendChild(e);
});

function isMovable(elem){
    let si = sixteen.i;
    let sj = sixteen.j;
    let ei = elem.i;
    let ej = elem.j;

    if(si == ei) return Math.abs(sj-ej)== 1;
    if(sj == ej) return  Math.abs(si-ei)== 1;;
}

function swapElem(elem){
    let t = sixteen.style.top;
    let l = sixteen.style.left;
    let ii = sixteen.i;
    let jj = sixteen.j;

    sixteen.style.top = elem.style.top;
    sixteen.style.left = elem.style.left;
    sixteen.i = elem.i;
    sixteen.j = elem.j;

    elem.style.top = t;
    elem.style.left = l;
    elem.i = ii;
    elem.j = jj;
}

// shuffle

function nextInt(num){
    return Math.floor(Math.random()*num);
}

function swap(arr, i, j){
    let pocket = arr[i];
    arr[i] =  arr[j];
    arr[j] = pocket;
}

function shuffle(arr){
    for (let i=arr.length-1; i>0; i--)swap(arr,i,nextInt(i+1))
}


