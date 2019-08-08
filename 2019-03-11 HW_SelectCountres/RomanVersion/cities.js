let addresses = {
    USA: ["New York", "Chicago", "Dallas", "Moscow"],
    France: ["Paris", "Marcel"],
    Germany: ["Frankfurt", "Munhen"],
    Israel: ["Jerusalem", "Tel-Aviv", "Haifa", "Biet Shemesh", "Akko", "Nagaria", "Tsfat"],
    Russia: ["Moscow", "St.Petersburg", "Ekaterinburg", "Surgut"]
}

function country() {
    let text = '<option> </option>\n';
    for (let key of Object.keys(addresses)) {
        text = text + '<option>';
        text = text + key;
        text = text + '</option>\n';
    }
    return text;
}

function city() {
    ad.innerText = co.value;
    let text = '<option> </option onselect="">\n';
    console.log(addresses[co.value].length);
    for (let i=0; i<addresses[co.value].length; i++) {
        text = text + "<option>";
        text = text + addresses[co.value][i];
        text = text + "</option>\n";
        console.log(addresses[i]);
    }
    ci.innerHTML = text;
}

function res() {
    ad.innerText = co.value + ", " + ci.value;
//    console.log(ci.value);
}

co.innerHTML = country();
