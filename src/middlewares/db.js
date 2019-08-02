const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function(){

const db_conn = config.get("db.conn_str");

winston.log("info", db_conn);

mongoose.connect(db_conn, {
        useNewUrlParser: true
    })
    .then(() => {   
        console.log("database connected");
        winston.log("info","database connected");
    })
    .catch((e) => {
        console.log(e.message);
        winston.log("error", e.message);
    });

}
