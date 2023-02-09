
function SampleInlineQueries() {
        this.sample_insert = `insert into smapltable(sample_1,sample_2) values(?)`

        this.sample_get_all = `select * from smapltable`


}

module.exports = SampleInlineQueries