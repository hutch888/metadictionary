export default function InputWarning({ error }) {
	return (
		<h3 className="input-warning">
			{error ? "Each character should be a letter or a digit." : null}
		</h3>
	);
}
