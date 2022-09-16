// import './App.css'
import { useState } from 'react'
import Profile from './components/Profile'
import TimeTracker from './components/TimeTracker'
import data from './data.json'

export default function App() {
	const [trackers, setTrackers] = useState(data)
	const [view, setView] = useState('weekly')

	const trackerElems = trackers.map(tracker => (
		<TimeTracker
			key={tracker.title}
			title={tracker.title}
			view={view}
			timeframes={tracker.timeframes}
			hours={tracker.timeframes[view].current}
		/>
	))

	return (
		<div className="bg-neutral-900 min-h-screen flex justify-center items-center">
			<div
				className="
					grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
					w-4/5 min-w-75 max-w-[56rem]
					my-16
				"
			>
				<Profile selectedView={view} setView={setView} />
				{trackerElems}
			</div>
		</div>
	)
}
