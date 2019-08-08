window.onload = function () {

    let nameParam = 'name';
    let emailParam = 'email';
    let params = getUrlVars();

    document.getElementById('name').innerText = decodeURIComponent(params[nameParam]);
    document.getElementById('email').innerText = decodeURIComponent(params[emailParam]);
};

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}