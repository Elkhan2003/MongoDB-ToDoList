const { Router } = require("express");
const { getToDo, saveToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);

// router.get("/", (req, res) => {
// 	res.json({ message: "Hi there..." });
// });

module.exports = router;
