import ViewSelector from './ViewSelector'
import profilePicture from '../images/image-jeremy.png'

export default function Profile(props) {
	return (
		<div
			className="
				bg-neutral-700
				rounded-xl
				shadow-lg
				text-white
				subpixel-antialiased
				sm:col-span-2 md:col-span-3 lg:col-span-1
				lg:row-span-2
			"
		>
			{/* Info */}
			<div
				className="
					bg-blue
					rounded-xl
					flex lg:flex-col
					items-center lg:items-start
					gap-4
					px-6 py-7 lg:pb-20
				"
			>
				{/* Profile Picture */}
				<img
					className="
						bg-white
						border-2 border-white border-solid rounded-full
						w-14
					"
					src={profilePicture}
					alt="Jeremy Robson"
				/>
				{/* Name */}
				<div className="font-light">
					<p className="text-xs text-neutral-100">Report for</p>
					<h1 className="text-xl lg:text-3xl">Jeremy Robson</h1>
				</div>
			</div>

			{/* View Selection */}
			<div
				className="
					text-neutral-300
					flex lg:flex-col lg:gap-3
					justify-between sm:justify-around
					px-6 py-4 lg:py-5
				"
			>
				<ViewSelector
					name="Daily"
					selected={props.selectedView === 'daily'}
					setView={() => props.setView('daily')}
				/>
				<ViewSelector
					name="Weekly"
					selected={props.selectedView === 'weekly'}
					setView={() => props.setView('weekly')}
				/>
				<ViewSelector
					name="Monthly"
					selected={props.selectedView === 'monthly'}
					setView={() => props.setView('monthly')}
				/>
			</div>
		</div>
	)
}
