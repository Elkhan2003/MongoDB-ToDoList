const { Router } = require("express");

const {
	getToDo,
	saveToDo,
	deleteToDo,
	updateToDo
} = require("../controllers/ToDoController");

// router.get("/", (req, res) => {
// 	res.json({ message: "Hi there..." });
// });

const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.post("/update", updateToDo);

router.post("/delete", deleteToDo);

module.exports = router;