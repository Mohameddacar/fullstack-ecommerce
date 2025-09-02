const express = require('express');
const cors = require('cors');
const route = require('./route');
const mongodbConfig = require('./route/dbconfig/mongodbConfig');
const app = express();
const port = 3000;


mongodbConfig();


// use Middleware
app.use(express.json());
app.use(cors());
app.use(route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
