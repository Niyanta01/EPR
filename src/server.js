
const express = require("express");
const cors = require("cors");
const app = express();
const winston = require("winston");

require("./middlewares/db.js")();
  
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin: "http://localhost:4200"
}));

winston.add(winston.transports.File,{filename:"./log/logfile.log"});

app.use("/api", require("./middlewares/routes"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  
    winston.log("info", "server at localhost " + port);
});

