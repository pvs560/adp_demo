const path = require('path');

const express = require("express");

const rootDir = require("../utils/path");
const adminRoutes = express.Router();

const productlist = [];

adminRoutes.get('/add-product', (req, res, next) => {
    console.log("Add product");
    //res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'/><button type='submit'>AddProduct</button></form>");
     res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

adminRoutes.post('/add-product', (req, res, next) => {
    console.log("/products");
    console.log(req.body);
    productlist.push({'title':req.body.title});
    res.redirect("/");

});

module.exports.routes = adminRoutes;
module.exports.productlist = productlist;