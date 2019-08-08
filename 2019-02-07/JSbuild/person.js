function Person(name,age,weight,married) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.married = married;
}
let people = [];

people.push(new Person("Sasha", 61,76.4,true));
people.push(new Person("Pasha", 45,44,false));
people.push(new Person("Dasha", 13,20.90,false));
people.push(new Person("Pasha", 33,80.01,true));
people.push(new Person("Masha", 45,89,true));

//people.forEach(p=>console.log(p));
let tbl = document.createElement("table");
tbl.classList.add("centered");

let row = tbl.insertRow();
for (let key of Object.keys(people[0])){
    let cell = row.insertCell();
    cell.innerText = key;
}
people.forEach((p)=> {
    row = tbl.insertRow();
    for(let key of Object.keys(p)){
        let cell = row.insertCell();
        cell.innerText = (p[key]);
    }
})
document.body.appendChild(tbl);
