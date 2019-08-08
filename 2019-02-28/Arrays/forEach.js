function condition(arr,predicate){
    let res = [];
    arr.forEach(function(item){if(predicate(item))res.push(item)});
    return res;
}

let arr = [1,3,5,7,9,0,8,6,4,2];
let filtered = condition(arr,(item)=>item>5);
console.log(filtered);

let mapped = arr.map((item)=>{return item%2 == 0 ? -item : item;});
console.log(mapped);