const express = require("express");
const cors = require("cors");
const apmserver = require('elastic-apm-node').start({
  serviceName: 'express-app',
  secretToken: 'secret',
  serverUrl: 'http://192.168.10.31:8200',
  // logLevel: 'debug',
  captureHeaders: true,
  captureBody:true,
  distributedTracing:true,
  distributedTracingOrigins:["http://localhost:4200","http://localhost:8080"],
  usePathAsTransactionName:true,
})

module.exports = {apmserver}

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
