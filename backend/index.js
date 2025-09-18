require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const route = require('./route');
const mongodbConfig = require('./dbconfig/mongodbConfig');
const cors = require('cors');


mongodbConfig();

// use Middleware
app.use(cors());
app.use(express.json());
app.use(route);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
