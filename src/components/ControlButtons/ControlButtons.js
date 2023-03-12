import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
const StartButton = (
	<div className="btn btn-one"
		onClick={props.handleStart}>
	Take Quiz
	</div>
);
const ActiveButtons = (
	
	<div className="btn-grp">
		
		<div className="btn btn-two"
			onClick={props.handleReset}>
			Cancel
		</div>
		{/* <div className="btn btn-one"
			onClick={props.handlePauseResume}>
			{props.isPaused ? "Resume" : "Pause"}
		</div> */}
	</div>
	
);

return (
	<div className="Control-Buttons">
	<div>{props.active ? ActiveButtons : StartButton}</div>
	</div>
);
}
