
function multiSelect(arr,sel) {
    sel.innerHTML=" ";
    arr.forEach((a)=>{
        let opt = document.createElement("option");
        opt.innerText = a;
        sel.appendChild(opt);
    })
}
let countr = {
    USA: ["New York", "Chicago", "Dallas", "Los Angeles"],
    France: ["Paris", "Lion", "Cherburg", "Marseille"],
    Germany: ["Berlin", "Drezden", "Hamburg", "Munich"],
    Israel: ["Jerusalem", "Tel-Aviv", "Haifa", "Rehovot"],
};
multiSelect(Object.keys(countr),countries);
multiSelect(countr[countries.value],cities);

countries.addEventListener("change",()=>{
    multiSelect(countr[countries.value],cities);
});