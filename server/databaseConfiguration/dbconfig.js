
const mysql = require("mysql");

if (mode === 'local') {
    var i = 1
    var connLocal = mysql.createPool({
        multipleStatements: global.config.multipleStatements,
        host: global.config.host,
        user: global.config.user,
        password: global.config.password,
        database: global.config.database,
    });
}
else if (mode === 'staging') {
    var i = 2
    var connStaging = mysql.createPool({
        multipleStatements: global.config.multipleStatements,
        host: global.config.host,
        user: global.config.user,
        password: global.config.password,
        database: global.config.database,
    });
}
else if (mode === 'preProd') {
    var i = 3
    var connPreprod = mysql.createPool({
        multipleStatements: global.config.multipleStatements,
        host: global.config.host,
        user: global.config.user,
        password: global.config.password,
        database: global.config.database,
    });
}
else if (mode === 'prod') {
    var i = 4
    var connProd = mysql.createPool({
        multipleStatements: global.config.multipleStatements,
        host: global.config.host,
        user: global.config.user,
        password: global.config.password,
        database: global.config.database,
    });
}




let conPool;
switch (i) {
    case 1:
        conPool = connLocal;
        break;
    case 2:
        conPool = connStaging;
        break;
    case 3:
        conPool = connPreprod;
        break;
    case 4:
        conPool = connProd;
        break;
}

try {
    conPool.getConnection((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`db credentials has been fetched`);
            console.log(`Successfully connected to database running on host ${global.config.host}`);

        }
    })

} catch (exception) {
    console.log("error", exception);
}

module.exports = {
    conPool
}





