import optionsIcon from '../images/icon-ellipsis.svg'

export default function TimeTracker() {
	return (
		<div>
			<div>
				<div>
					<h2>Work</h2>
					<button>
						<img src={optionsIcon} alt="Options" />
					</button>
				</div>
				<p>32hrs</p>
				<p>Last Week - 36hrs</p>
			</div>
		</div>
	)
}
