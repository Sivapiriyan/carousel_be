// Import packages
const express = require("express");
require("dotenv").config();
const app = express();
const http = require("http").Server(app);
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/index.routes"));

http.listen(process.env.SERVICE_PORT, (err) => {
  console.log(`🛡️  Server listening on port: ${process.env.SERVICE_PORT} 🛡️`);
});
