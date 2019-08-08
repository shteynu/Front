let url = 'https://api.exchangeratesapi.io/latest';
let rates;

volume.addEventListener("input",()=>setResult());
from.addEventListener("change",()=>setResult());
to.addEventListener("change",()=>setResult());

let xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", ()=>{
    if(xhr.readyState != 4)return;
    let apiObj = JSON.parse(xhr.response);
    let base = apiObj.base;
    rates = apiObj.rates;
    rates[base]=1;
    let currencies = Object.keys(rates).sort();
    fillSelect(currencies,from);
    fillSelect(currencies,to);
});
xhr.open("GET",url);
xhr.send();

volume.addEventListener("input",()=>{
    result.innerText = volume.value*rates[to.value]/rates[from.value].toFixed(2);
});

function fillSelect(arr, sel){
    sel.innerHTML = "";
    arr.forEach((a)=>{
      let opt = document.createElement("option");
      opt.innerText = a;
      sel.appendChild(opt);
    })
}

function setResult() {
    result.innerText = (volume.value*rates[to.value]/rates[from.value]).toFixed(2);
}