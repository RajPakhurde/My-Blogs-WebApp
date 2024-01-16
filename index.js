import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded( {extended: true} ));

app.use(express.static("public"));

let data;
 
let dataArray = [];
 
app.get("/", (req, res) => {
    res.render("index.ejs", {content: dataArray});
})

app.get("/blog", (req, res) => {
    res.render("blog.ejs");
})
app.get("/about", (req, res) => {
    res.render("about.ejs");
})
app.get("/resources", (req, res) => {
    res.render("resources.ejs");
})
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.post("/submit", (req, res) => {
    data = req.body;
    dataArray.push(data);
    console.log(data);
    res.redirect("/")
})

app.listen(port, () => {
    console.log("Server running on port ", port);
})