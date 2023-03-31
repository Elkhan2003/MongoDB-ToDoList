import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
	return (
		<div className="header__dawfewf">
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? "link activeHeaderStyle" : "link"
				}
			>
				MyAPI
			</NavLink>
			<NavLink
				to="/random"
				className={({ isActive }) =>
					isActive ? "link activeHeaderStyle" : "link"
				}
			>
				RandomAPI
			</NavLink>
		</div>
	);
};
