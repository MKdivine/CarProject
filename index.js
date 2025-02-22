const express = require("express")  
const app = express();
const path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CarProject", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/doge", (req, res) => {
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})