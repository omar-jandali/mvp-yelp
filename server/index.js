const express = require("express");
const parser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const router = require("./router.js")

const server = express()
const listeningPort = 4444;

server.use(morgan("dev"));
server.use(parser.json())
server.use(parser.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname, "../client/src")))

server.use("/api", router)

server.listen(listeningPort, () => {console.log("server connected")})