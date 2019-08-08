function Rectangle(a,b) {
    this.a=a;
    this.b=b;

    this.perimeter=function () {
       return 2 * (this.a+this.b);
    }

    this.area = function(){
        return this.a*this.b;
    }
    this.diagonal = function () {
        return Math.sqrt(this.a*this.a+this.b*this.b);
    }
}
let rect = new Rectangle(3,4);

console.log(rect.perimeter());
console.log(rect.area());
console.log(rect.diagonal());

console.log(rect);