module.exports.getPostBody = function(req){
    return new Promise(function(resolved,rejected){
        if(req.method != "POST") {
            rejected("POST method assumed");
            return;
        }
        const post = [];
        req.on("data", chunk=>post.push(chunk));
        req.on("end", ()=> resolved(Buffer.concat(post)));
    })
};
module.exports.mySQLReq = function(db,dbReq){
    return new Promise(function(resolved, rejected){
        db.query(dbReq, function(err,fields){
            err == null ? resolved(fields) : rejected(err);
        })
    })
};