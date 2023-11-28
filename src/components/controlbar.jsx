export function ControlBar() {
	return (
		<div className="control_bar">
			<p>Today</p>
			<p>Week</p>
			<div className="separator"></div>
			<button className="temp_units active">
				<span>&deg;C</span>
			</button>
			<button className="temp_units">
				<span>&deg;F</span>
			</button>
			<div>
				<span className="material-icons">account_circle</span>
			</div>
		</div>
	);
}