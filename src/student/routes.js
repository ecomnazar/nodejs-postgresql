const { Router } = require("express");
const controller = require("./contoller");

const router = Router();

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);
router.put("/update", controller.updateStudent);
router.post("/", controller.addStudent);
router.post("/login", controller.loginStudent);
router.delete("/:id", controller.removeStudent);

module.exports = router;
