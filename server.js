const express = require("express");
const studentRoutes = require("./src/student/routes");

// ------------------------------------

const app = express();
const PORT = 3002;

// ------------------------------------

app.use(express.json());
app.use(cors());

// ------------------------------------

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});