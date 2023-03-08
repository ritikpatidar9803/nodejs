const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;

//view engine
app.set('view engine', 'hbs'); 
const template_path = path.join(__dirname, "../templates/views");
app.set('views', template_path);
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

//public static path
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

//routing
app.get("", (req, res)=>{
    res.render('index')
});
app.get("/about", (req, res)=>{
    res.render('about');
});
app.get("/weather", (req, res)=>{
    res.render('weather')
});
app.get("*", (req, res)=>{
    res.render('404error', {
        errorMsg:'Opps! Page Not Found'
    })
});

app.listen(port,() =>{
    console.log(`Listning to the port at ${port}`);
})
