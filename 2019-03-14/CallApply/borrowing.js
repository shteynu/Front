function Person(fName,lName) {
    this.fName = fName;
    this.lName = lName;
    this.fullName = function (title) {
        return title+". "+this.fName+" "+this.lName;
    }
}

let p = new Person("Sarah","Rabinovich");
console.log(p.fullName("Mrs"));

function Employee(fName,lName) {
    this.fName = fName;
    this.lName = lName;

}
let e = new Employee("David","Kats");
console.log(p.fullName.call(e,("Mr")));