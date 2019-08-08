let arr0 = [];
let arr00 = [1,2,3,4,5,4,3,2];

let arr1 = [];
arr1.push(8);
arr1.push(11);
arr1.push(12);
arr1.unshift(0);
arr1.unshift(-9);
arr1.unshift(-2);

console.log(arr1);
//delete arr1[3];
//console.log(arr1);

let arrslice = arr1.slice(3);
console.log(arr1);
console.log(arrslice);

/*let arrcopy = arr1;//shalow copy;
arrcopy[2]=22;
console.log(arr1);*/

let arrcopy = arr1.slice();//deep copy;
arrcopy[2]=22;
console.log(arr1);
console.log(arrcopy);

arr1.splice(2,3,44,55,66,77);
console.log(arr1);

let arrfirst = [9,8,7];
let arrsecond = [1,2,3];
let arrthird = [4,5,4];

let arrresult = arrfirst.concat(arrsecond,arrthird);
console.log(arrresult);

let orig = "Sasha;62;74.5;true";
let dataObject = orig.split(";");
console.log(dataObject);
console.log(dataObject.join("$"));
