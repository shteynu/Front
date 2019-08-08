let arr = [1,2,3,4,5,6,7,8,9];
let sum = arr.reduce((prev,item)=>{return prev+item;}, 0);
console.log(sum);

let rarr = [];
for(let i=0;i<1000;i++)rarr.push(Math.random());
let res = rarr.reduce((prev,item)=> {return item>0.5 ? prev+1 : prev;}, 0);
console.log(res);
