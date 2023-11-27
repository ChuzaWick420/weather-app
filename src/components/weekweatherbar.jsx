export function WeekWeatherBar() {

	const days = [];

	for (let i = 0; i < 7; i++) {
		days.push(
			<div key={i.toString()} className="day">
				<p className="dayname">Mon</p>
				<img className="day_weather_ico" />
				<p className="temp">
					<span className="high">
						<span>42</span>
						<span><sup>&deg;</sup></span>
					</span>
					<span className="low">
						<span>69</span>
						<span><sup>&deg;</sup></span>
					</span>
				</p>
			</div>
		);
	}

	return (
		<div className="weekdays">
			{days}
		</div>
	);
}