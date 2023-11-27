import { Overview } from './overview.jsx';
import { Details } from './details.jsx';

function MainCard () {
	return (
		<div className="main_card">
			<Overview />
			<Details />
		</div>
	);
}

export default MainCard