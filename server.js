const express = require("express")
const app = express();
const cookieParser = require('cookie-parser')


const PORT = 8000;


app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.get("/", (req, res) => {
	res.render("dashboard");
})
app.get("/dashboard", (req, res) => {
	res.render("dashboard");
})

app.get("/login", (req, res) => {
	res.render("login");
})
app.listen(PORT, ()=>{
	console.log("Server Started on: "+ PORT);
})