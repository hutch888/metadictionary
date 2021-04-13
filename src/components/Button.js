export default function Button({ activatesFunction, buttonLabel }) {
	return (
		<button
			type="button"
			className="btn btn-primary m-2"
			onClick={activatesFunction}
		>
			{buttonLabel}
		</button>
	);
}
