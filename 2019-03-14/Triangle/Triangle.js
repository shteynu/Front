function Triangle(a,b,c) {

    this.getA = function () {
        return a;
    };
    this.getB = function () {
        return b;
    };
    this.getC = function () {
        return c;
    }

    this.perimeter = function () {
        return a+b+c;
    }
}
let t = new Triangle(3,4,5);
console.log(t.perimeter());