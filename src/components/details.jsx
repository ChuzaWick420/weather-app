import { ControlBar } from "./controlbar";
import { Highlights } from "./highlights";
import { WeekWeatherBar } from "./weekweatherbar";

export function Details() {
	return (
		<div className="details">
			<ControlBar />
			<WeekWeatherBar />
			<Highlights />
		</div>
	);
}