// import or require modules (Packages you install)
const express = require("express");
const app = express();


//Routes
//Root Route / Home route 
app.get("/", (req, res) => {
    res.send("<h1>Welcome to our awesome nodeJs webapp");
});

//Another Route
app.get("/anotherroute", (req, res) => {
    res.write("<h1>This is another route</h1>");
    res.write("<p>congratulations on setting up you second route</p>");
    res.send();
});

//To start the server (Basically same as listening for requests)
const port = 5000; // access your project @ localhost:5000 NB: can use any port you wish
app.listen(port, function() {console.log(`Server has started on port ${port}`)});