let express = require("express")
let app = express();

app.use("/bulb",function middleWere(req, res, nex) {
    console.log("URL is:", req.url())
    console.log("URL is:", req.baseUrl())
    console.log("URL is:", req.connection())
    console.log("URL is:", req.method())
    res.send("some response")
} );
app.get("/bulb",function middleWere(req, res, nex) {
    
    res.send("some response")
} );
app.post("/bulb",function middleWere(req, res, nex) {
   
    res.send("some response")
} );
app.put("/bulb", function middleWere(req, res, nex) {
    
    res.send("some response")
});
app.delete("/bulb",function middleWere(req, res, nex) {
    
    res.send("some response")
});

function middleWere(req, res, nex) {
    console.log("URL is:", req.url())
    console.log("URL is:", req.method())
    res.send("some response")
}
server.listen(PORT, () => {
    console.log("server is running on port: " + PORT);
})