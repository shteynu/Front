function Employee(name,city,age,salary,gender) {
    this.name=name;
    this.city=city;
    this.age=age;
    this.salary=salary;
    this.gender=gender;
}
let company=[];

company.push(new Employee("Sasha","Kyriat Tyvon",37,15000,"male"));
company.push(new Employee("Pasha","Kyriat Byalik",33,6000,"male"));
company.push(new Employee("Masha","Kyriat Mozckin",30,9000,"female"));

//company.forEach(e=>console.log(e));
let tbl = document.createElement("table");
tbl.classList.add("centered");

let row = tbl.insertRow();
for(let key of Object.keys(company[0])){
    let cell = row.insertCell();
    cell.innerText = key;
}
company.forEach(e=>{
    row = tbl.insertRow();
    for(let key of Object.keys(e)){
        let cell = row.insertCell();
        cell.innerText = e[key];

    }
})
document.body.appendChild(tbl);
