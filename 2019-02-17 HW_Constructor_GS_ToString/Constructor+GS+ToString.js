function constructorFactory(fields) {
    let code = "";
    fields.forEach((f)=>{
        code = code+"this."+f+"="+f+";";
    });
    return new Function(fields,code);
}

let Person = constructorFactory(["name","surname","age","weight","married","gs"]);
//console.log(Person.toString());
//console.log(Person);

function GS(fieldName,value){
    if (value != 0 && value !== false && !value) return this[fieldName];
    else this[fieldName] = value;
}

let m = new Person("Max","Berenshteyn",18,70.5,false,GS);
console.log(m.gs("surname"));
console.log(m);
m.gs("age", 19);
m.gs("name","Sasha");
console.log(m);
console.log("*******************************************************");

