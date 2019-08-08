function constructorFactory(fields){
    let code = "";
    fields.forEach((f)=>{
        code = code + "this."+f+"="+f+";";
    });
    return new Function(fields,code);
}

let Car = constructorFactory(["model","year","engine","ac"]);
//console.log(Car.toString());
console.log(new Car("Zhiguli",1983,1.3,false));

