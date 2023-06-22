"use strict";
var express = require('express');
var app = express();
app.set('puerto', 9876);
var fs = require('fs');
app.use(express.json());
var jwt = require("jsonwebtoken");
app.set("key", "cl@ve_secreta");
app.use(express.urlencoded({ extended: false }));
var multer = require('multer');
var mime = require('mime-types');
var storage = multer.diskStorage({
    destination: "public/fotos/",
});
var upload = multer({
    storage: storage
});
var cors = require("cors");
app.use(cors());
app.use(express.static("public"));
var mysql = require('mysql');
var myconn = require('express-myconnection');
var db_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'productos_usuarios_node'
};
app.use(myconn(mysql, db_options, 'single'));
var solo_admin = express.Router();
app.listen(app.get('puerto'), function () {
    console.log('Servidor corriendo sobre puerto:', app.get('puerto'));
});
//# sourceMappingURL=APP.js.map