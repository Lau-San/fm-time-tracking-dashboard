import optionsIcon from '../images/icon-ellipsis.svg'

const styles = {
	Work: {
		backgroundColor: 'hsl(15, 100%, 70%)',
		backgroundImage: 'url(./icon-work.svg)',
	},
	Play: {
		backgroundColor: 'hsl(195, 74%, 62%)',
		backgroundImage: 'url(./icon-play.svg)',
	},
	Study: {
		backgroundColor: 'hsl(348, 100%, 68%)',
		backgroundImage: 'url(./icon-study.svg)',
	},
	Exercise: {
		backgroundColor: 'hsl(145, 58%, 55%)',
		backgroundImage: 'url(./icon-exercise.svg)',
	},
	Social: {
		backgroundColor: 'hsl(264, 64%, 52%)',
		backgroundImage: 'url(./icon-social.svg)',
	},
	'Self Care': {
		backgroundColor: 'hsl(43, 84%, 65%)',
		backgroundImage: 'url(./icon-self-care.svg)',
	},
}

export default function TimeTracker(props) {
	return (
		<div
			className={`
				bg-no-repeat bg-[right_0.8rem_top_-0.45rem]
				rounded-t-xl rounded-b-2xl
				shadow-lg
				text-white
				flex items-end
				h-[8.2rem] sm:h-44 lg:h-full
			`}
			style={styles[props.title]}
		>
			{/* Tracker Content */}
			<div
				className="
					bg-neutral-700 hover:bg-neutral-500
					rounded-xl
					w-full
					p-5 lg:py-6
					transition-colors duration-500 ease-in-out
				"
			>
				{/* Title and Options */}
				<div className="flex justify-between items-center">
					<h2 className="sm:text-sm font-medium">{props.title}</h2>
					<button>
						<img
							className="
								opacity-80 hover:opacity-100
								transition-opacity duration-300 ease-in-out
							"
							src={optionsIcon}
							alt="Options"
						/>
					</button>
				</div>
				{/* Stats */}
				<div
					className="
						flex sm:flex-col
						justify-between items-center sm:items-start
						sm:mt-4
					"
				>
					{/* Current Hours */}
					<p
						className="
							text-2xl sm:text-4xl
							font-light
						"
					>
						{props.timeframes[props.view].current}hrs
					</p>
					{/* Previous Hours */}
					<p
						className="
							text-neutral-100
							text-sm sm:text-xs
							sm:mt-2
						"
					>
						Last{' '}
						{props.view === 'daily'
							? 'Day'
							: props.view === 'weekly'
							? 'Week'
							: 'Month'}{' '}
						- {props.timeframes[props.view].previous}hrs
					</p>
				</div>
			</div>
		</div>
	)
}
