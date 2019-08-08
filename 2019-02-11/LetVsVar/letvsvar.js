/* visibility of variable */

var a = 3;
{
    var a = 5;
}

console.log(a);

    let b = 3;
{
    let b = 5;
    console.log(b+" block");
}

console.log(b);

    const c = 3;
    /*c = 5; error*/
{
    const c = 5;
}
console.log(c);