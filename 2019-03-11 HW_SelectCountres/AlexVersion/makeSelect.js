export function fillSelect(sel, array){
    sel.innerHTML = "";
    array.forEach((a)=>{
        let opt = document.createElement("option");
        opt.innerText = a;
        sel.appendChild(opt);
    })
}