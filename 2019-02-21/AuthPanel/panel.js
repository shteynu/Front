let authObject = {};

function submit(){
    authObject.log = log.value;
    authObject.psw = psw.value;

   console.log(authObject);
}

function reset() {
    log.value = "";
    psw.value = "";
}

sq.focus();
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        submit();
    }
    else if(e.key === "Escape"){
        reset();
    }
});
