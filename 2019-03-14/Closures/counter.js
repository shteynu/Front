function Counter(){

    let counter=0;

    this.inc = function () {counter++;}
    this.show = function () {console.log(counter)}

}
let c1 = new Counter();
console.log(c1);

c1.inc();
c1.inc();
c1.inc();
c1.inc();

c1.show();