const express = require('express');
const cors = require("cors");
const Register = require("../src/routes/register");
const Login = require("../src/routes/login");
const app = express();
const Products = require('../src/routes/product');
const Orders = require('../src/routes/order');
app.use(express.json());
app.use(cors());
app.use("/",Products);
app.use("/",Orders);
app.use("/",Register);
app.use("/",Login)

module.exports = app;
