const app = require('express')();
const postBody = require('../../../my_modules/promises').getPostBody;
const mongoConnection = require('../../../my_modules/mongoConnection')();

let mongoDB;
mongoConnection.then(function(db){
                                mongoDB=db;
                                console.log("mongoDB connected");
                                app.listen(8081);
                                console.log("Server at 8081 is ON");
                                },
                     function(err){console.log(err)}
);

app.get("/", (req, res)=>{
    mongoDB.collection("book").find({}).toArray((err, result)=>{
        res.json(result);
    });
});

app.put("/change", (req,res)=>{
    let changeData = req.query;
    console.log(changeData.oldValue);
    let condition = {title: (changeData.oldValue).toString()};
    let update ={$set: {title: (changeData.newValue).toString()}};
    mongoDB.collection("book").updateOne(condition, update);
    res.write("OK");
    res.end();
});

app.post("/insert", (req, res)=>{
    postBody(req).then((p)=>{
        let obj = JSON.parse(p.toString());
        mongoDB.collection("book").insertOne(obj);
    });
    res.write("OK");
    res.end();
});





