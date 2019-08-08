/*const express = require('express');
const app = express();*/

const app = require('express')();
const headers = require("../../my_modules/headers");
const promises = require("../../my_modules/promises");
const fs = require('fs'); //модуль работы с файловой системой;

app.listen(8081);
console.log("Server at 8081 is ON");

app.use((req,res,next)=>{
    headers.setHeaders(res);
    next();
});
app.post("/pic",(req,res)=>{
    promises.getPostBody(req)
        .then((data)=>{
            fs.writeFile("2019-04-04/FileReading/visibility.jpg",data,(err)=>{
                if(err)throw err;
                res.write("OK");
                res.end();
            })
        })
});
