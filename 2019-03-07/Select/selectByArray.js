function makeSelect(arr, container) {
    let sel = document.createElement("select");
    arr.forEach((a)=>{
        let opt = document.createElement("option");
        opt.innerText = a[0];
        sel.appendChild(opt);
    })
    container.appendChild(sel);
}
let countr = {
    USA: ["New York", "Chicago", "Dallas", "Los Angeles"],
    France: ["Paris", "Lion", "Cherburg", "Marseille"],
    Germany: ["Berlin", "Drezden", "Hamburg", "Munich"],
    Israel: ["Jerusalem", "Tel-Aviv", "Haifa", "Rehovot"],
};
let arr=["Jerusalem","Tel-Aviv","Haifa","Beer-Sheva","Eilat"];
makeSelect(countr,document.body);
