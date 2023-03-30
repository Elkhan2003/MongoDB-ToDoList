require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const routes = require("./routes/TodoRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json);
app.use(cors());

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("Connected To MongoDB..."))
	.catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server is running on port By Elcho${PORT}`);
});
