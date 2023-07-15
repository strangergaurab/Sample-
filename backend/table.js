module.exports = function(connection,tableQuery){
    if(tableQuery==null||tableQuery==""){
        console.log("Table query is empty");
        return
    }
    connection.query(tableQuery, function (err, result) {
        if(err){
            console.log(err);
            return;
        }
        if(result["warningCount"]>0){
            console.log("Table Already exists");
            return
        }
        console.log("Table Created");
    })



}