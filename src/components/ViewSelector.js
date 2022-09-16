export default function ViewSelector(props) {
	return (
		<button
			className="
				hover:text-white
				w-fit
				transition-colors duration-500 ease-in-out
			"
			style={props.selected ? { color: 'white' } : {}}
			onClick={props.setView}
		>
			{props.name}
		</button>
	)
}
