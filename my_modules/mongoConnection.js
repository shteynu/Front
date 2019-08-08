const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/test";
const dbName = "test";

module.exports = function(){
    return new Promise(function(resolve, reject){
        mongoClient.connect(url, {useNewUrlParser: true},function(err, conn){
            if (err != null) reject(err);
            else resolve(conn.db(dbName));
        })
    })
}