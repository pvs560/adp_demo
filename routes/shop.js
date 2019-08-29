//const path = require("path");

const express = require("express");

//const rootDir = require("../utils/path");

//const dataroute = require("./admin");
const shopRoutes = express.Router();

shopRoutes.get('/', (req, res, next) => {
    // console.log(req.url);
    // res.send("<h1>welocome Express</h1>");
    // console.log("shop.js::",dataroute.productlist);
    // res.sendFile(path.join(rootDir,"views","shop.html"));
    const products = [{"title":"book1"}];
    res.render('shop',{"prods":products,"title":"Shop"});
});

module.exports = shopRoutes;