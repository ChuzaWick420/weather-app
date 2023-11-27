import { Detail_panel } from "./detail_panels";

export function Highlights() {
	
	return (
		<>
			<div className="highlights">
				<h2>Today's Highlights</h2>
			</div>

			<div className="panel_list">
				<div className="panel">
					<p className="stat_name">UV Index</p>
					<div>
						<div className="guage_secondary">
							<span>50%</span>
						</div>
						<div className="fill_bar"></div>
					</div>
				</div>

				<div className="panel">
					<p className="stat_name">Wind Speed</p>
					<p>
						<span className="value">72</span>
						<span className="unit">km/h</span>
					</p>
					<div>
						<img src="https://cdn-icons-png.flaticon.com/256/9356/9356230.png" />
						<span className="place_name"></span>
					</div>
				</div>

				<div className="panel">
					<p className="stat_name">Sunrise and Suset</p>
					<div className="sun">
						<img src="https://cdn1.iconfinder.com/data/icons/weather-from-clouds-line/64/cloud-element-weather-sunrise-sun-up-rise-512.png" />
						<div className="sun_rise">
							<span className="sun_time_current">6:49 PM</span>
						</div>
					</div>
					<div className="sun">
						<img src="https://cdn-icons-png.flaticon.com/256/3920/3920799.png" />
						<div className="sun_set">
							<span className="sun_time_current">6:49 PM</span>
						</div>
					</div>
				</div>

				<Detail_panel />
				<Detail_panel />
				<Detail_panel />
			</div>
		</>
	);
}