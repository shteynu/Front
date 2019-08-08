function factorial(n){
    if(n<2)return 1;
    return n*factorial(n-1);
}
console.log(factorial(6));

let fact = function fff(n) {
    if(n<2)return 1;
    return n*fff(n-1);
};
console.log(fact(6));
console.log(fff(6));//doesn't work;