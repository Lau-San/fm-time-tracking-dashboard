import profilePicture from '../images/image-jeremy.png'

export default function Profile() {
	return (
		<div>
			<div>
				<img src={profilePicture} alt="Jeremy Robson" />
				<h1>Report for Jeremy Robson</h1>
			</div>
			<button>Daily</button>
			<button>Weekly</button>
			<button>Monthly</button>
		</div>
	)
}
