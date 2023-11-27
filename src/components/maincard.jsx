import { Overview } from './components/overview';
import { Details } from './components/details';

function MainCard () {
	return (
		<div className="main_card">
			<Overview />
			<Details />
		</div>
	);
}

export default MainCard