function getRequest(url){
    return new Promise(function (resolved,reject) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
            if(xhr.readyState != 4 )return;
            if(xhr.status != 200)reject(xhr.response);
            else resolved(xhr);
        });
        xhr.open("GET",url);
        xhr.send();
    })
}
function postRequest(url,body){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState != 4 )return;
        if(xhr.status != 200)reject(xhr.response);
        else resolved(xhr);
    });
    xhr.open("POST",url);
    xhr.send(body);
}

