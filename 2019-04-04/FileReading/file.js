let url = "http://localhost:8081/pic";
let xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange",()=>{
    if(xhr.readyState!=4)return;
    console.log(xhr.response);
});

let fr = new FileReader();
fr.addEventListener("load",()=>{
    xhr.open("POST",url);
    xhr.send(fr.result);
});

pic.addEventListener("change", ()=>{
    fr.readAsArrayBuffer(pic.files[0]);
});