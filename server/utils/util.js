
const mysql = require('mysql');

function Util() {

    this.getQueryString = function (callName, paramsArr) {
        let queryString = '',
            preparedQueryString;
        if (paramsArr.length > 0) {
            queryString = `CALL ?? (${new Array(paramsArr.length).fill('?').join(', ')});`;
            preparedQueryString = mysql.format(queryString, [String(callName)].concat(paramsArr));
            return preparedQueryString;
        }
        else if (paramsArr.length == 1) {
            preparedQueryString = mysql.format(`CALL ?? (${paramsArr[0]})`, [String(callName)].concat(paramsArr))
            return preparedQueryString;
        }
        else {
            preparedQueryString = mysql.format(`CALL ??`, [String(callName)])
            return preparedQueryString;

        }
    }

    this.getResponse = function (err, data, statusCode, request) {
        let response = {
            status: statusCode,
            time: util.getCurrentUTCTime(),
            response: data
        };
        return response
    }
    this.getCurrentUTCTime = function (format) {
        date = new Date()
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        current_datetime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
        return current_datetime
    }

}


module.exports = Util;