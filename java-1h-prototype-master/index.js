/**
 * Java       ->    byte code
 * C++        ->    10101110101
 * JavaScript ->    JavaScript
 * TypeScript ->    JavaScript
 * ES6        ->    ES6/JavaScript
 *
 * -------------------------------------
 * JavaScript
 *
 *
 *
 *                           JSX (React)     TypeScript 2014
 * EcmaScript 2015 (ES5)
 * EcmaScript 2016 (ES6)
 */



function getName() {

    if (1 === 1) {
        return 'John';
    }
}

//public void
//public Person getPerson()

//public class Person {

function Person(name, age) {
    this.name = name; //String name | this: public, object memory related
    this.age = age;

    this.i = 0;

    this.getFullName = function () {
        return this.name + ' ' + this.age;
    };

    return name; //string
    //return this;
}


function main() {
    //new
    var person = new Person('John', 25);



    console.log(`Person after new Person: ${person}`);
    debugger;


    //function call
    var /*String*/ dave = Person('dave', 22);
    console.log(`Dave after Person('dave', 22);: ${dave}`);

    debugger;


    Person.prototype.name = 'stolen';
    Person.prototype.age = 1000;
    Person.prototype.city = 'Tel-Aviv';

    debugger;
    console.log(`Dave after prototype ${dave}`);
    console.log(`person after prototype ${person}`);

    var peter = new Person('peter', 33);
    debugger;


    // String.prototype.daveName = 'dave-string';
    // debugger;


    // Person('John', 25);  -> is expected to return something (or void)
    //
    // Person.prototype.name = 'John';
    // Person.prototype.age = 25;
}

main();