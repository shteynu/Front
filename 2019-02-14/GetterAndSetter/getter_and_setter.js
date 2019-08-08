function Person (name,age,weight,married){
    this.name=name;
    this.age=age;
    this.weight=weight;
    this.married=married;

    this.gs = function (fieldName,value) {
        if (value != 0 && value !== false && !value) return this[fieldName];
        else this[fieldName] = value;
    }
}

let p = new Person("Sasha",61,75.8,true);

console.log(p.gs("weight"));
p.gs("age",19);
console.log(p);

function addOne(a,b=1){
    return a+b;
}
console.log(addOne(7));
console.log(addOne(7,10));

let operation = "-";

//************************

let code = "return a"+operation+"b;";
let s = new Function (["a"],["b"],code);
console.log(s(4,7));