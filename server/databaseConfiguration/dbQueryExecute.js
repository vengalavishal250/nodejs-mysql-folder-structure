
let mysql = require('mysql');



function DbQueryExecute() {

    this.executeQuery = function (queryString, conPool) {
        return new Promise((resolve, reject) => {

            try {
                conPool.query(queryString, function (err, rows) {
                    if (!err) {
                        console.log(`dbcall - ${queryString}`);
                        resolve(rows[0])
                    } else {
                        console.log("error: err: ", err);
                        reject(err);
                    }
                })
            } catch (exception) {
                console.log("error", exception);
            }
        })

    }

    this.executeInlineQuery = function (inlineQuery, params, conPool) {
        return new Promise((resolve, reject) => {

            try {
                conPool.query(inlineQuery, params, function (err, rows) {
                    if (!err) {
                        console.log(`dbInlinecall - ${inlineQuery}`);
                        resolve(rows)
                    } else {
                        console.log("error: err: ", err);
                        reject(err);
                    }
                })
            } catch (exception) {
                console.log("error", exception);
            }
        })

    }
}



module.exports = DbQueryExecute






