let car = {
    model:"Zhiguli",
    year: 1985,
    engine: 1.3,
    ec: false,
    toString: function () {
        return this.model+"; "+
            this.year+"; "+
            this.engine+"; "+
            (this.ec?"yes":"no");
    }
};

car.engine = 4.8;
console.log(car);
console.log(car.engine);
console.log(car.toString());

function Person(name,age,weight,married) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.married = married;

  /* this.toString=function () {
        return this.name+"; "+
            this.age+"; "+
            this.weight+"; "+
            (this.married?"yes":"no");
    }*///just for checking;
}
console.log("////////////////////////////////////////");
let masha = new Person("Masha", 22, 48.7, false);
console.log(masha);
console.log("////////////////////////////////////////");

function getMasha(field) {
    return masha[field];
}

console.log(getMasha("age"));
console.log(getMasha("name"));
console.log(getMasha("blabla"));

console.log(Object.keys(masha));

for(let key of Object.keys(masha))
    console.log(key+": "+masha[key]);

console.log("***************************");

console.log(Object.keys(car));
//console.log(Object.keys(car.toString())); - doesn't show fields of "toString";

for(let key of Object.keys(car))
    console.log(key+": "+car[key]);//"toString" work like a field, doesn't show values of "toString";

/*console.log(masha.toString());*///just for checking;

