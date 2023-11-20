// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function Detail_panel() {
	return (
		<div className="panel">
			<p className="stat_name">Test</p>
			<p>
				<span className="value"></span>
				<span className="unit">%</span>
			</p>
			<span className="condition"></span>
			<span className="emote"></span>
		</div>
	);
}

function Highlights() {
	
	return (
		<>
			<div className="highlights">
				<h2>Today's Highlights</h2>
			</div>

			<div className="panel_list">
				<div className="panel">
					<p className="stat_name">UV Index</p>
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
							<span className="sun_time_left">2m</span>
						</div>
					</div>
					<div className="sun">
						<img src="https://cdn-icons-png.flaticon.com/256/3920/3920799.png" />
						<div className="sun_set">
							<span className="sun_time_current">6:49 PM</span>
							<span className="sun_time_left">2m</span>
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

function WeekWeatherBar() {

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

function ControlBar() {
	return (
		<div className="control_bar">
			<p>Today</p>
			<p>Week</p>
			<div className="separator"></div>
			<span className="temp_units">&deg;C</span>
			<span className="temp_units">&deg;F</span>
			<div>
				<span className="material-icons">account_circle</span>
			</div>
		</div>
	);
}

function Details() {
	return (
		<div className="details">
			<ControlBar />
			<WeekWeatherBar />
			<Highlights />
		</div>
	);
}

function SearchBar() {
	return (
		<div>
			<span className="material-icons">search</span>
			<input className="search_bar" type="text" placeholder="Search for places" />
		</div>
	);
}

function Temperature() {
	return (
		<>
			<img className="weather_ico" />
			<div>
				<h2 className="UnitValue"></h2>
				<h2 className="UnitType">&deg;C</h2>
			</div>
		</>
	);
}
function Statistics() {
	return (
		<div className="stats">
			<div>
				<img />
				<p></p>
			</div>
			<div className="rain_prob">
				<img />
				<p></p>
			</div>
		</div>
	);
}

function Overview() {
	return (
		<div className="overview">
			<SearchBar />
			<Temperature />
			<Statistics />
			<div className="place_img">
				<p className="place_name">London</p>
			</div>
		</div>
	);
}

function MainCard () {
	return (
		<div className="main_card">
			<Overview />
			<Details />
		</div>
	);
}

function App() {
	return (
		<MainCard />
	);
}

export default App
