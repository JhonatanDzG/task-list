const express = require("express");
const PORT =  require("./config.js");
const morgan = require("morgan")

const server = express()

const task_routes = require("./routes/task.routes.js") 

server
.use(morgan('dev'))
.use(task_routes);


server.listen(PORT);
console.log("server started on port " + PORT);


