// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "./SearchBar.css"
import "./Overview.css"

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

function Overview() {
	return (
		<div className="overview">
			<SearchBar />
			<img className="weather_ico" />
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
