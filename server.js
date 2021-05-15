const express = require("express")
const app = express();
const cookieParser = require('cookie-parser')


const PORT = 8000;


app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static('images'));

app.get("/", (req, res) => {
	res.render("dashboard");
})
app.get("/dashboard", (req, res) => {
	res.render("dashboard");
})
app.get("/", (req, res) => {
  res.render("Hobby");
})
app.get("/Hobby", (req, res) => {
  res.render("Hobby");
})

app.get("/login", (req, res) => {
	res.render("login");
})

app.post('/login', (req,res)=>{
    let token = req.body.token;

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
      }
      verify()
      .then(()=>{
          res.cookie('session-token', token);
          res.send('success')
      })
      .catch(console.error);

})


app.get('/logout', (req, res)=>{
    res.clearCookie('session-token');
    res.redirect('/login')

})
app.listen(PORT, ()=>{
	console.log("Server Started on: "+ PORT);
})