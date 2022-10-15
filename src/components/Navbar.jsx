import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">Lama dev</span>
			<div className="user">
				<img
					src="https://images.pexels.com/photos/8596889/pexels-photo-8596889.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
					alt="user-img"
				/>
				<span>John</span>
				<button>logout</button>
			</div>
		</div>
	);
};

export default Navbar;
