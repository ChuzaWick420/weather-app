import { SearchBar } from "./search_bar";
import { Statistics } from "./statistics";
import { Temperature } from "./temperature";

export function Overview() {
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