const getStudents = "SELECT * FROM users";
const getStudentById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const addStudent =
  "INSERT INTO users (fullname, email, password, region, gender, certificate_key) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
const removeStudent = "DELETE FROM users WHERE id = $1";
const updateStudent = "UPDATE users SET name = $1 WHERE id = $2";

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  removeStudent,
  updateStudent,
};
