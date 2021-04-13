export default function OutputList({ outputArray }) {
	return (
		<div className="row">
			<div className="output-panel container border border-2 border-success rounded">
				<div className="row">
					{outputArray.map((word, index) => (
						<div key={index.toString()} className="col col-md-6 col-lg-4">
							{word}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
