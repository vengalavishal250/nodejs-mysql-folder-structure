
const { conPool } = require('../databaseConfiguration/dbconfig')
const SampleInlineQueries = require('../dbCallsInline/sampleInlineQueries')


function SampleService(objectCollection) {
    const util = objectCollection.util;
    const db = objectCollection.db;

    const sampleInlineQueries = new SampleInlineQueries();


    this.sampleInsert1 = async function (request) {
        let responseData = []
        error = true

        const paramsArr = new Array(
            request.sample_1,
            request.sample_2
        );

        const queryString = util.getQueryString('sample_db_call', paramsArr);

        if (queryString !== '') {
            await db.executeQuery(queryString, conPool)
                .then(async (data) => {
                    error = false
                }).catch((err) => {
                    console.log("err-------" + err);
                    error = err
                })

            return [error, responseData]
        }
    };

    this.sampleInsert = async function (request) {
        let responseData = []
        error = true

        const paramsArr = new Array(
            request.sample_1,
            request.sample_2
        );
        await db.executeInlineQuery(sampleInlineQueries.sample_insert, [paramsArr], conPool)
            .then(async (data) => {
                error = false
            }).catch((err) => {
                console.log("err-------" + err);
                error = err
            })

        return [error, responseData]
    }

    this.sampleGetAll = async function (request) {
        let responseData = []
        error = true

        const paramsArr = new Array(

        );
        await db.executeInlineQuery(sampleInlineQueries.sample_get_all, paramsArr, conPool)
            .then(async (data) => {
                responseData = data
                error = false
            }).catch((err) => {
                console.log("err-------" + err);
                error = err
            })

        return [error, responseData]
    }


}


module.exports = SampleService;
