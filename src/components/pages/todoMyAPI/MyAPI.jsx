import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.scss";

// const API_URL = "http://localhost:3000";
const API_URL = "https://wandering-moth-wetsuit.cyclic.app/";

export const MyAPI = () => {
	const [users, setUsers] = useState([]);
	const [task, setTask] = useState("");
	const [editId, setEditId] = useState(null);
	const [updatedTask, setUpdatedTask] = useState("");

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const response = await axios.get(API_URL);
		const data = response.data;
		setUsers(data);
	};

	const handletaskChange = (event) => {
		setTask(event.target.value);
	};

	const handleUpdateTask = (event) => {
		setUpdatedTask(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!task.trim()) {
			return;
		}

		const response = await axios.post(`${API_URL}/save`, {
			task,
			completed: false
		});
		console.log(response.data);
		setTask("");
		fetchUsers();
	};

	const handleDelete = async (_id) => {
		const response = await axios.post(`${API_URL}/delete`, { _id });
		console.log(response.data);
		fetchUsers();
	};

	const handleCompleted = async (_id, completed) => {
		const user = users.find((user) => user._id === _id);
		const response = await axios.post(`${API_URL}/update`, {
			_id,
			task: user.task,
			completed: !completed
		});
		console.log(response.data);
		fetchUsers();
	};

	const handleEdit = (_id) => {
		setEditId(_id);
		const user = users.find((user) => user._id === _id);
		setUpdatedTask(user.task);
	};

	const handleCancel = () => {
		setEditId(null);
	};

	const handleSave = async (_id) => {
		const response = await axios.post(`${API_URL}/update`, {
			_id,
			task: updatedTask
		});
		console.log(response.data);
		setEditId(null);
		fetchUsers();
	};

	return (
		<>
			<div className="my__api__content">
				<div className="my-api-container">
					<h1>Get Things Done!</h1>
					<form className="add__task" onSubmit={handleSubmit}>
						<input
							type="text"
							value={task}
							placeholder="What is the task today?"
							onChange={handletaskChange}
						/>
						<button type="submit">
							<pre>Add Task</pre>
						</button>
					</form>
					<div className="users">
						{users.map((user) => (
							<div key={user._id}>
								{editId === user._id ? (
									<div className="user">
										<div className="user__change__form">
											<form onSubmit={(e) => e.preventDefault()}>
												<input
													type="text"
													value={updatedTask}
													onChange={handleUpdateTask}
												/>
											</form>
										</div>
										<div className="buttons">
											<button onClick={() => handleSave(user._id)}>Save</button>
											<button onClick={() => handleCancel()}>Cancel</button>
										</div>
									</div>
								) : (
									<div className="user">
										<div>
											<p
												style={{
													textDecoration: user.completed
														? "line-through"
														: "none"
												}}
											>
												{user.task}
											</p>
										</div>
										<div className="buttons">
											<button
												onClick={() =>
													handleCompleted(user._id, user.completed)
												}
												className={user.completed ? "completed" : ""}
											>
												{user.completed ? "Uncompleted" : "Completed"}
											</button>
											<button onClick={() => handleEdit(user._id)}>Edit</button>
											<button onClick={() => handleDelete(user._id)}>
												Delete
											</button>
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
