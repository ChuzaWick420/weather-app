// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function Details() {
	return (
		<div className="details">

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
