const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange",() => {
    if(xhr.readyState != 4)return;
    console.log(xhr.response);
});
/*xhr.open("GET","http://localhost:8081/masha");*/
/*xhr.open("GET","http://localhost:8081/greetings?fname=David&lname=Katz");*/
/*xhr.open("POST","http://localhost:8081/person");*/
/*xhr.open("GET","http://localhost:8081/auth");*/
/*console.log(atob(btoa("sasha:12345")));*/
xhr.open("GET","http://localhost:8081/connect");
xhr.setRequestHeader("Authorization", btoa('sasha:12345'));
/*xhr.send(JSON.stringify({ fname:"Rachel",lname: "Fishman"}));*/
/*
xhr.send();*/
xhr.send();
