const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoute = require("./routes/User");
const courseRoute = require("./routes/Course");

// app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use("/user", userRoute);
app.use("/course", courseRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening  on port ${port}`));
