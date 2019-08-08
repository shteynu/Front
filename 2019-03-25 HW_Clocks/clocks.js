let date = new Date();
let su,so,si;
let a = true;

ho.innerText = "00";
mi.innerText = "00";
se.innerText = "00";

function start() {
    if(a===true) {

        su = setInterval(() => {
            ho.innerText = two(new Date().getHours()), 1000
        });

        so = setInterval(() => {
            mi.innerText = two(new Date().getMinutes()), 1000
        });

        si = setInterval(() => {
            se.innerText = two(new Date().getSeconds()), 1000
        });
        a = false;
    }

    if (ho.innerText < "9"){
        ho.innerText = "0"+date.getHours();
    }
    if (mi.innerText < "9"){
        mi.innerText = "0"+date.getMinutes();
    }
    if(se.innerText < "9"){
        se.innerText = "0"+date.getSeconds();
    }
}

function stop() {
    if(a===false) {
        clearInterval(su);
        clearInterval(so);
        clearInterval(si);
        a=true;
    }
}

function two(num){return num<10 ? "0"+num : ""+num;}

