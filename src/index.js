const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello from AWS Fargate 🚀!"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("App up and running!");
})