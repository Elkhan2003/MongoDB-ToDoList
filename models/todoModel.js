const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	task: {
		type: String,
		required: true
	},
	complated: {
		type: Boolean,
		required: true
	}
});

module.exports = mongoose.model("ToDo", todoSchema);