const pool = require("../../db");
const queries = require("./queries");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

// ------------------------------------

const addStudent = async (req, res) => {
  const { fullname, email, password, region, gender } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const randomCertificatekKey = crypto.randomUUID();
  pool.query(queries.checkEmailExists, [email], (error, result) => {
    if (result.rows.length) {
      res.status(404).json("useralreadyexists");
    } else {
      // bcrypt password
      // add student to db
      pool.query(
        queries.addStudent,
        [
          fullname,
          email,
          hashedPassword,
          region,
          gender,
          randomCertificatekKey,
        ],
        (error, result) => {
          if (error) throw error;
          res.status(201).json(result.rows[0]);
        }
      );
    }
  });
};

// ------------------------------------

const getStudentById = (req, res) => {
  const id = req.params.id;
  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

// ------------------------------------

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, result) => {
    const noStudentFound = !result.rows.length;
    if (noStudentFound) {
      res.send("Student not found");
    }
    pool.query(queries.removeStudent, [id], (error, result) => {
      if (error) throw error;
      res.status(200).send("Student removed successfully");
    });
    // if (error) throw error;
    // res.status(200).send("Student removed successfully");
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getStudentById, [id], (error, result) => {
    const noStudentFound = !result.rows.length;
    if (noStudentFound) {
      res.send("Student not found");
    }
    pool.query(queries.updateStudent, [name, id], (error, result) => {
      if (error) throw error;
      res.status(200).send("Student updated successfully");
    });
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
