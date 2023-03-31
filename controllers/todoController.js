const ToDoModel = require("../models/todoModel");

module.exports.getToDo = async (req, res) => {
	const todo = await ToDoModel.find();
	res.send(todo);
};

module.exports.saveToDo = (req, res) => {
	const { task, complated } = req.body;

	ToDoModel.create({ task, complated })
		.then((data) => {
			console.log("Added Successfully...");
			console.log(data);
			res.send(data);
		})
		.catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
	const { _id } = req.body;

	console.log("id ---> ", _id);

	ToDoModel.findByIdAndDelete(_id)
		.then(() => res.set(201).send("Deleted Successfully..."))
		.catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
	const { _id, task, complated } = req.body;

	ToDoModel.findByIdAndUpdate(_id, { task, complated })
		.then(() => res.set(201).send("Updated Successfully..."))
		.catch((err) => console.log(err));
};
