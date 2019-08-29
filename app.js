const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

// const routeData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();


app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

//app.use('/admin', routeData.routes);
app.use(shopRoutes);



app.get('/favicon.ico', (req, res) => res.status(204));

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","error.html"));
})

app.listen(3000);
