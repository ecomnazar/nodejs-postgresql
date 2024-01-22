const { Router } = require("express");
const controller = require("./contoller");

const router = Router();

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);
router.put("/:id", controller.updateStudent);
router.post("/", controller.addStudent);
router.delete("/:id", controller.removeStudent);

module.exports = router;