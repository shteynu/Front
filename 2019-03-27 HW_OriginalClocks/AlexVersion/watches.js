//hatches

for (let i=0; i<12; i++){
    let hatch = makeDiv("hatch");
    hatch.style.transform = "rotate("+30*i+"deg)";
    cont.appendChild(hatch);
}

//figures

for (let i=1; i<13; i++){
    let frame = makeDiv("frame");
    frame.style.transform = "rotate("+30*i+"deg)";

    let figure = makeDiv("figure");
    figure.style.transform = "rotate(-"+30*i+"deg)";
    figure.innerText = i;

    frame.appendChild(figure);
    cont.appendChild(frame);
}

// arrows
let secondArrow = makeDiv("secondArrow");
let minuteArrow = makeDiv("minuteArrow");
let hourArrow = makeDiv("hourArrow");

cont.appendChild(secondArrow);
cont.appendChild(minuteArrow);
cont.appendChild(hourArrow);

//small circle

let small = makeDiv("smallCircle");
cont.appendChild(small);

//digital watches

let digital = makeDiv("numbers");
cont.appendChild(digital);

//engine

function go(){
    let delay = 40;

    setInterval (() => {
        let date = new Date();
        secondArrow.style.transform = "rotate("+
            (date.getSeconds()*6+date.getMilliseconds()*0.006)+"deg)";
        minuteArrow.style.transform = "rotate("+
            (date.getMinutes()*6+date.getSeconds()*0.1)+"deg)";
        hourArrow.style.transform = "rotate("+
            (date.getHours()*30+date.getMinutes()*0.5)+"deg)";
        digital.innerText = two(date.getHours())+":"+
                            two(date.getMinutes())+":"+
                            two(date.getSeconds());
    }, delay)
}

// functions

function two(num){return num<10 ? "0"+num : ""+num;}
function makeDiv(className){
    let res = document.createElement("div");
    res.classList.add(className);
    return res;
}

// cod itself

go();