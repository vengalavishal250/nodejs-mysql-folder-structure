



mode = "local";
// mode = "staging";
// mode = "prePod";
// mode = "prod";
config = {};

if (mode === "staging") {

} else if (mode === "prod") {

} else if (mode === "preProd") {

}
else if (mode === "local") {
        config.user = "root",
        config.host = "127.0.0.1",
        config.password = "",
        config.database = "nodejs_mysql",
        config.multipleStatements = true,
        config.sceret_key = "nodejs_mysql"

        config.port = 8000


}


