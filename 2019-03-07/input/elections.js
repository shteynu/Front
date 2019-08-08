let getResult = function () {
    let radiobuttons = document.getElementsByName("elections");
    for(let i=0;i<radiobuttons.length;i++){
        if(radiobuttons[i].checked){
            console.log(radiobuttons[i].value);
            break;
        }
    }
}