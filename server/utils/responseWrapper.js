
function ResponseWrapper(util) {

    this.getResponse = function (err, data, statusCode, reqBody) {
        if (!err) {
            response = {
                status: statusCode,
                time: util.getCurrentUTCTime(),
                error: err,
                response: data
            }
        } else {
            response = {
                status: statusCode,
                time: util.getCurrentUTCTime(),
                response: data
            }
        }

        return response
    }

}

module.exports = ResponseWrapper