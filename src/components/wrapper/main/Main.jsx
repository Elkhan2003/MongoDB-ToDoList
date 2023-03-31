import React from "react";
import { Route, Routes } from "react-router-dom";
import { RandomAPI } from "../../pages/todoRandomAPI/RandomAPI.jsx";
import { MyAPI } from "../../pages/todoMyAPI/MyAPI.jsx";

export const Main = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MyAPI />} />
				<Route path="/random" element={<RandomAPI />} />
			</Routes>
		</div>
	);
};
