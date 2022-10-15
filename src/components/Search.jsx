import React from "react";

const Search = () => {
	return (
		<div className="search">
			<div className="searchForm">
				<input type="text" placeholder="Find a user" />
			</div>
			<div className="userChat">
				<img
					src="https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
					alt="user-img"
				/>
				<div className="userChatInfo">
					<span>Jane</span>
				</div>
			</div>
		</div>
	);
};

export default Search;