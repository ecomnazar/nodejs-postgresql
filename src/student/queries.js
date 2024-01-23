const getStudents = "SELECT * FROM users";
const getStudentById = "SELECT * FROM users WHERE id = $1";
const getStudentByEmail = "SELECT * FROM users WHERE email = $1";
const checkEmailExists = "SELECT * FROM users WHERE email = $1";
const addStudent =
  "INSERT INTO users (fullname, email, password, region, gender, certificate_key, date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
const removeStudent = "DELETE FROM users WHERE id = $1";
const updateStudent =
  "UPDATE users SET fullname = $1, email = $2, region = $3, gender = $4 WHERE email = $2";

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  removeStudent,
  updateStudent,
  getStudentByEmail,
};
