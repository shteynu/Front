console.log("!!!"+sqRed.style.width);

let obj = getComputedStyle(sqRed);

console.log(obj.backgroundColor);
console.log(getHex(obj.backgroundColor));

function getHex(rgb){
    let colors = rgb
        .substring(0,rgb.length-1)
        .substring(rgb.indexOf("(")+1)
        .split(",");
    return "#"+getHexColor(colors[0])+
        getHexColor(colors[1])+
        getHexColor(colors[2]);
}

function getHexColor(str){
    let h = (parseInt(str)).toString(16);
    return (+str) < 16 ? "0"+h : h;
}