import React from "react";

const Message = () => {
	return (
		<div className="message owner">
			<div className="messageInfo">
				<img
					src="https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
					alt=""
				/>
				<span>just now</span>
			</div>
			<div className="messageContent">
				<p>hello</p>
				<img
					src="https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Message;
