const app = require('express')();
const headers = require('../../../my_modules/headers.js');
const promises = require('../../../my_modules/promises');
const base64 = require('base64url');
const db = require('../../../my_modules/connectionDB');

app.listen(8081);
console.log("Server at 8081 is ON");

app.use('*',(req,res,next)=>{
    headers.setHeaders(res);
    next();
});

app.get("/masha",(req,res)=>{
    res.write("Good evening, Masha!");
    res.end();
});

app.get("/natasha",(req,res)=>{
    res.write("Go home, Natasha!");
    res.end();
});
app.get("/greetings", (req,res)=>{
   /* console.log(req.query);*/
    let data = req.query;
   /* res.write("OK");*/
    res.write("Nice to meet you, "+data.fname+" "+data.lname+"!");
    res.end();
});
app.post("/person", (req,res)=>{
  /*  let post = [];
    req.on("data", (chunk)=>post.push(chunk)); // chunk 32 Kbite;
    req.on("end", ()=>{
        let obj  = JSON.parse(post.join(""));
        res.write("How you are, "+obj.fname+" "+obj.lname+"?");
        res.end();
    })*/
  promises.getPostBody(req)
      .then((buff)=>{
          let obj = JSON.parse(buff.toString());
          res.write("How you are, "+obj.fname+" "+obj.lname);
          res.end();
      })
});
app.get("/auth", (req,res)=>{
    console.log(base64.decode(req.headers.authorization));
    res.write("OK");
    res.end();
});
app.get("/connect",(req,res)=>{//READ!!!!!!!!!!!!!!!!!
    let dbReq = "select * from book";
    db.query(dbReq,(err, fields)=>{
        console.log(err);
        console.log(fields);
        res.write(JSON.stringify(fields));
        res.end();
    })
});
app.post("/insert",(req,res)=>{//INSERT!!!!!!!!
    promises.getPostBody(req)
        .then((buff)=>{
            let obj = JSON.parse(buff.toString());
            let teacher_name=obj.teacher_name;
            let dbReq = "INSERT INTO teacher (teacher_name) VALUES ('"+teacher_name+"')";
            db.query(dbReq,(err,fields)=>{
                console.log(err);
                console.log(fields);
                res.write(JSON.stringify(fields));
                res.end();
            })
        })
});
app.post("/put",(req,res)=>{//UPDATE!!!!!!!!!!!!!!!
    promises.getPostBody(req)
        .then((buff)=>{
            let obj = JSON.parse(buff.toString());
            let teacher_name=obj.teacher_name;
            let dbReq = "UPDATE teacher SET teacher_name = '"+teacher_name+"' WHERE teacher_name = 'Putin'";
            db.query(dbReq,(err,fields)=>{
                console.log(err);
                console.log(fields);
                res.write(JSON.stringify(fields));
                res.end();
            })

        })
});
app.post("/delete",(req,res)=>{//DELETE!!!!!!!!!!!!!!!!!!!!!!
    promises.getPostBody(req)
        .then((buff)=>{
            let obj = JSON.parse(buff.toString());
            let teacher_name=obj.teacher_name;
            let dbReq = "DELETE FROM teacher WHERE teacher_name = '"+teacher_name+"'";
            db.query(dbReq,(err,fields)=>{
                console.log(err);
                console.log(fields);
                res.write(JSON.stringify(fields));
                res.end();
            })

        })
});
app.post("/read",(req,res)=>{//SELECT!!!!!!!!!!!!!!!!!!!!!
    promises.getPostBody(req)
        .then((buff)=>{
            let obj = JSON.parse(buff.toString());
            let teacher_name=obj.teacher_name;
            let dbReq = "SELECT * FROM teacher WHERE teacher_name = '"+teacher_name+"'";
            db.query(dbReq,(err,fields)=>{
                console.log(err);
                console.log(fields);
                res.write(JSON.stringify(fields));
                res.end();
            })

        })
});
