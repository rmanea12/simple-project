const express = require("express");
const bodyParser = require("body-parser");
const { uuid } = require("uuidv4");

const app = express();

const DUMMY_PRODUCTS = []; // not a database, just some in-memory storage for now

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

//TODO 1 -- CREATE A GET ROUTE TO RETRIEVE ALL THE DUMMY_PRODUCTS

//TODO 2 -- CREATE A POST ROUTE TO CREATE A PRODUCT

app.listen(5000); // start Node + Express server on port 5000
