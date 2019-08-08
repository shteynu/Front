function constructorFactoryGSToString_Alex(fields, objectName=""){

    let codeFields = "";
    fields.forEach((f) => {
        codeFields = codeFields+"this."+f+"="+f+";";
    })

    let codeGS = "this.gs = " +
        "function(fieldName, value){" +
        "if (value === undefined) return this[fieldName];" +
        "else this[fieldName] = value;" +
        "};";

    let codeToString = "";
    fields.forEach((f)=>{
        codeToString = codeToString +
            "+'; "+f+"=' + "+"this."+f;
    })

    codeToString = "this.toString = function(){return "+
                    ((objectName && objectName.length>0) ? "'"+objectName+": '" : "")+"+"+
                    "'" + codeToString.substring(4)+"};";

    code = codeFields+codeGS+codeToString;
    return new Function(fields,code);
}

let Car  = new constructorFactoryGSToString_Alex(["model","year","engine", "ac"], "Car");

let car = new Car("Zhiguli",1983,1.3,true);

console.log(car.toString());
console.log(car.gs("engine"));
car.gs("ac", false);
console.log(car.toString());