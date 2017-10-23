var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");

app.use("/", router);

app.listen(process.env.PORT || 3000);	