import * as express from "express";
const myWebServer: express.Express = express();
myWebServer.listen(8080);
myWebServer.use(express.urlencoded({extended: false}));
myWebServer.use(express.json);
myWebServer.use("/bilder", express.static(__dirname + "/images"));
myWebServer.use("/bilder", express.static(__dirname + "/content"));

myWebServer.get("/" , (req:express.Request, res :express.Reponse) =>{
    res.status(200);
    res.sendFile(__dirname + "/html/index.html");
})

myWebServer.get((req: express.Request, res: express.Response)=>{
    res.status(404);
    res.send('Die gewünschte Seite wurde vom Webserver nicht gefunden');
})