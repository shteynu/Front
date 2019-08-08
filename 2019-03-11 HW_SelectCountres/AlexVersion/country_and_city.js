import {addresses} from "./addresses.js";
import {fillSelect} from "./makeSelect.js";

function show(){
    sp.innerText = countrySel.value + ", " + citySel.value;
}

fillSelect(countrySel, Object.keys(addresses));
fillSelect(citySel,addresses[countrySel.value]);
show();

countrySel.addEventListener("change", ()=>{
    fillSelect(citySel,addresses[countrySel.value]);
    show();
});

citySel.addEventListener("change", ()=>{show()});
