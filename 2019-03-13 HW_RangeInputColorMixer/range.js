
function changeColor(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    document.getElementById("sq").style.background = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("r").innerText = document.getElementById("red").value;
    document.getElementById("g").innerText = document.getElementById("green").value;
    document.getElementById("b").innerText = document.getElementById("blue").value;
    sp.innerText = parseColor("rgb(" + red + "," + green + "," + blue + ")").hex;
}

function parseColor(color) {
    var arr=[];
    color.replace(/[\d+\.]+/g, function(v) {
        arr.push(parseFloat(v));
    });
    return {
        hex: "#" + arr.slice(0, 3).map(toHex).join(""),
        opacity: arr.length == 4 ? arr[3] : 1
    };
}
function toHex(int) {
    var hex = int.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
