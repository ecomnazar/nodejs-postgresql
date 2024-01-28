const express = require("express");
const cors = require("cors");
const studentRoutes = require("./src/student/routes");
const dotenv = require("dotenv");
const { certificateGenerate } = require("./src/certificateGenerator");

// ------------------------------------

const app = express();
const PORT = 3002;

// ------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
dotenv.config();

// ------------------------------------

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/students", studentRoutes);

app.post("/api/v1/certificate", (req, res) => {
  const { fullname, id } = req.body;
  certificateGenerate();
  res.status(200).send({ fullname, id });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
