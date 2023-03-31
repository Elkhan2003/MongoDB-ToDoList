import React, { useEffect, useState } from "react";
import "../todoMyAPI/Style.scss";

export const RandomAPI = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=10")
			.then((response) => response.json())
			.then((data) => setUsers(data.results));
	}, []);

	return (
		<div>
			<h1>RandomAPI</h1>
			{users.map((user) => (
				<div className="user" key={user.login.uuid}>
					<img src={user.picture.medium} alt={user.name.first} />
					<p>
						Name: {user.name.first} {user.name.last}
					</p>
					<p>Email: {user.email}</p>
					<p>Phone: {user.phone}</p>
				</div>
			))}
		</div>
	);
};
