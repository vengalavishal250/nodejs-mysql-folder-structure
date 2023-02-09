


function validations(objectCollection) {
    const util = objectCollection.util;
    const db = objectCollection.db;

    this.sampleInsertValidation = async function (request) {
        console.log("---------------------entered sampleInsertf-----------------------");
        let responseData = []

        const paramsArr = new Array(
            request.employee_id.toString(),
        );

        const queryString = util.getQueryString('heads_get_emps_under_heads', paramsArr);

        if (queryString !== '') {
            await db.executeQuery(1, queryString, request)
                .then(async (data) => {
                    responseData = data;
                    error = false

                }).catch((err) => {
                    console.log("err-------" + err);
                    error = err
                })
            return responseData
        }


    };
}

module.exports = validations;
