function stringValidator(str, emptyAllowed=false){
    return str !== undefined &&
           str !== null &&
           (str.length != 0 || emptyAllowed);
}

function floatValidator(str){
    return str !== undefined &&
           str !== null &&
           !isNaN(parseFloat(str));
}

function integerValidator(str, negative=false){
    return str !== undefined &&
            str !== null &&
            !isNaN(parseInt(str)) &&
            (parseInt(str) >= 0 || negative);
}
