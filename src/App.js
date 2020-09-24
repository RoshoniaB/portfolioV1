import React from 'react';
import './App.css';
import { useModeSelector } from 'use-light-switch';
import Home from './Components/Home';
import { Route } from 'react-router-dom';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './App.css';

const App: React.FC = () => {
	const selected = useModeSelector({
		light: { color: '#EFF7FA', name: 'Light',dis:'disabled' },
		dark: { color: '#161616', name: 'Dark', dis: 'enabled' },
		unset: { color: 'blue', name: 'Unset' },
	});

	return (
		<div
			className='app'
			style={{
				padding: '1em 2em ',
				backgroundColor: selected.color,
				height: '100%',
			}}>
			<div style={{ color: '#787878', fontSize: '9px' }}>
				<p>{selected.name} Mode {selected.dis}</p>
			</div>

			<Route
				path='/'
				exact
				render={() => {
					return <Home props={selected} />;
				}}
			/>

			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/projects' component={Projects} />
		</div>
	);
};
export default App;
