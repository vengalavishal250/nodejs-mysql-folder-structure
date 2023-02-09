

function Scheduler(objectCollection) {
    const util = objectCollection.util;
    const db = objectCollection.db;



    //on every monday at 09:00 to all emps
    this.sendRemainder = async function () {
        schedule.scheduleJob('00 00 09 * * 1', async function () {

        })
    }

}





module.exports = Scheduler;

