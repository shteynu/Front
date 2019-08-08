function Person(fName,lName) {
    this.fName = fName;
    this.lName = lName;
}
Person.prototype.fullName = function () {
    return this.fName + " "+this.lName;
};
const p = new Person("Vasia","Pupkin");
console.log(p.fullName());

function shuffle() {
    const len = this.length;
    for(let i=len-1;i>0;i--){
        let index = Math.floor((i+1)*Math.random());
        const pocket = this[index];
        this[index] = this[i];
        this[i] = pocket;
    }
}
Array.prototype.shuffle = shuffle;

const arr = [0,1,2,3,4,5,6,7,8,9,];

arr.shuffle();
console.log(arr);

function toTitleCase(){
    return this.substring(0,1).toUpperCase()+
        this.substring(1).toLowerCase();
}
String.prototype.toTitleCase = toTitleCase;

const string = "bYra^&%*)tinO";
console.log(string.toTitleCase());
console.log(string);
