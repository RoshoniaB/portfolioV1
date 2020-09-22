import React from 'react';
import './App.css';
import { useModeSelector } from 'use-light-switch';
import Home from './Components/Home';

function App() {
	const App: React.FC = () => {
		const selected = useModeSelector({
			light: { color: '#EFF7FA', name: 'Light' },
			dark: { color: '#232526', name: 'Dark' },
			unset: { color: 'blue', name: 'Unset' },
		});

		return (
			<div
				style={{
					padding: '1em 2em',
					backgroundColor: selected.color,
				}}>
				<p>Try switching your dark mode in macOS or Windows</p>
				<div>{selected.name}</div>
				<Home />
			</div>
		);
	};
	return (
		<div>
			<App />
		</div>
	);
}
export default App;
