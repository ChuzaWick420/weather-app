export function Temperature() {
	return (
		<>
			<img className="weather_ico" />
			<div className="current_temp">
				<h2 className="UnitValue"></h2>
				<h2 className="UnitType">&deg;C</h2>
			</div>
		</>
	);
}