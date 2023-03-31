require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const routes = require("./todoRoute.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("Connected To MongoDB..."))
	.catch((err) => console.log(err));

app.use("/", routes);

app.listen(PORT, () => {
	console.log(`Server is running on port By Elcho${PORT}`);
});
