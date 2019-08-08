function getHex(clr){
    let hex = parseInt(clr).toString(16);
    return clr < 16 ? clr == 0 ? "00" : "0" + hex : hex;
}

function RGBtoHSL(r,g,b){

    // Wikipedia algorithm

    r = r/255;
    g = g/255;
    b = b/255;

    let maxColor = Math.max(r,g,b);
    let minColor = Math.min(r,g,b);

    //lightness:
    let lightness = (maxColor + minColor) / 2 ;

    // saturation and hue
    let saturation = 0;
    let hue = 0;

    if(maxColor != minColor){

        saturation = lightness < 0.5 ?
            (maxColor - minColor) / (maxColor + minColor) :
            (maxColor - minColor) / (2.0 - maxColor - minColor);

        if(r == maxColor){
            hue = (g-b) / (maxColor - minColor);
        }else if(g == maxColor){
            hue = 2.0 + (b - r) / (maxColor - minColor);
        }else{
            hue = 4.0 + (r - g) / (maxColor - minColor);
        }
        hue = (hue > 0 ? hue%6 : hue + 6)*60;
    }

    return [hue, saturation*100, lightness*100];
}

function getResult() {
    const r = redValue.value;
    const g = greenValue.value;
    const b = blueValue.value;

    redTD.innerText = r;
    greenTD.innerText = g;
    blueTD.innerText = b;

    bigSquare.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    hexResult.innerText = "hex: #"+getHex(r)+getHex(g)+getHex(b);

    const hslArr = RGBtoHSL(r,g,b);
    hslResult.innerText = "hsl: "+
                          hslArr[0].toFixed(1)+", "+
                          hslArr[1].toFixed(2)+"%, "+
                          hslArr[2].toFixed(2)+"%";
}

redValue.addEventListener("input", getResult);
greenValue.addEventListener("input", getResult);
blueValue.addEventListener("input", getResult);

redValue.value = 127;
greenValue.value = 127;
blueValue.value = 127;

getResult();