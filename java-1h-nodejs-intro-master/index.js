//require = import
let express = require('express'); //require('node_modules/express/index.js')

//express.js init
let app = express();


//192.168.100.100 -> google.com

//localhost:3000/hello
app.get('/hello', function (request, response) {

    let param = request.query['name'];
    if (param) {
        response.send("Hello from " + param);
        return;
    }
    response.send('Hello to Java 1H from NodeJS (express.js) server');
});

app.get('/hello/:name', function (request, response) {

    let name = request.params['name'];
    response.send("Express.js param is " + name);
});

function postUser(request, response) {
    console.log(`Request header 'greenTea' = ${request.header('greenTea')}`);

    console.log(`Request body = ${request.body}`);

    let user = JSON.stringify(request.body);

    response.send("received");
}

//middleware -> body-parser (byte [] -> string)
app.post('/users',/*middleware,*/ postUser);



app.use(express.static('content'));

app.listen(3000, function () {
    console.log("started on port 3000")
});