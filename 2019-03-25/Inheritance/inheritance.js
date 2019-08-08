function Animal(name,age) {
    this.name = name;
    this.age = age;
}

const animal = new Animal("Roger",4);

function Rabbit(earsLength) {
    this.earsLength = earsLength;
    //this.__proto__=animal; привязка в конструкторе;
}

Rabbit.prototype = animal;// привязка к функции;

const rabbit = new Rabbit(75);
//rabbit.__proto__=animal; привязка через ссылку;

//rabbit.name = "Masha";

console.log(rabbit.name);
console.log(animal.name);

function Cat(name,age,numberOfStripes) {
    this.numberOfStripes = numberOfStripes;
    this.__proto__= new Animal(name,age);
}


const cat = new Cat("Barsik",5,4);
console.log(cat.name);
