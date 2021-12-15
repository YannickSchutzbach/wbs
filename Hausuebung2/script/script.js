"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var myWebServer = express();
myWebServer.listen(8080);
myWebServer.use(express.urlencoded({ extended: false }));
myWebServer.use(express.json);
myWebServer.use("/bilder", express.static(__dirname + "/images"));
myWebServer.use("/bilder", express.static(__dirname + "/content"));
myWebServer.get("/", function (req, res) {
    res.status(200);
    res.sendFile(__dirname + "/html/index.html");
});
myWebServer.get(function (req, res) {
    res.status(404);
    res.send('Die gewünschte Seite wurde vom Webserver nicht gefunden');
});
