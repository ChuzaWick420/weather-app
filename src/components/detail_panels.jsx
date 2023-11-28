export function Detail_panel() {
	return (
		<div className="panel">
			<div className="content_wrapper">
				<p className="stat_name">Test</p>
				<p>
					<span className="value"></span>
					<span className="unit">%</span>
				</p>
				<div>
					<span className="condition"></span>
					<span className="emote"></span>
				</div>
			</div>
		</div>
	);
}