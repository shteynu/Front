const currencies = ["USD","EUR","ILS","RUB"]

const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", ()=>{
    if (xhr.readyState != 4) return;
    const currObj = JSON.parse(xhr.response);
    const base = currObj.base
    const rates = currObj.rates;
    rates[base] = 1;

    let tbl = document.createElement("table");
    let row = tbl.insertRow();
    row.insertCell();
    for (let i=0; i<currencies.length; i++){
        let cell = row.insertCell();
        cell.innerText = currencies[i];
    }
    for (let i=0; i<currencies.length; i++){
        let row = tbl.insertRow();
        let cell = row.insertCell();
        cell.innerText = currencies[i];
        for (let j=0; j<currencies.length; j++){
            let cell = row.insertCell();
            cell.innerText =
                rates[currencies[i]]/rates[currencies[j]];
        }
    }

    cont.appendChild(tbl);
})

xhr.open("GET","https://api.exchangeratesapi.io/latest");
xhr.send();