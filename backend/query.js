const connection = require("./db_connection")

function runQuery(sqlquery, tag) {
    return new Promise((resolve, reject) => {
        connection().then(conn => {
            if (conn == null) {
                throw new Error("Connection is null");
            }
            if (sqlquery == null || sqlquery == "") {
                throw new Error("Query is empty");
            }
            conn.query(sqlquery, (err, result) => {

                if (err) throw err;
                console.log(tag + ":" + " successfully executed");
                resolve(result);
            })
        }).catch(err => {
            console.log("error" + tag + ":" + err);
            reject(err);
        })
    })
}
module.exports = runQuery;