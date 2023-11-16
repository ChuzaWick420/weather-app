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

function Overview() {
	return (
		<div className="overview">
			<div>
				<span className="material-icons">search</span>
				<input className="search_bar" type="text" placeholder="Search for places" />
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
