import React from 'react';
import { Nav as ReactNav, Navbar } from 'react-bootstrap';
import './home.css';

export default function Home(props) {
	// let toggle = props.props.name
		// if (toggle === 'Light'){
		// 	console.log('its light')
		// }
	
		return (
		<div>
			<Navbar className=' homeNavbar ' >
				<ReactNav className='mr-auto hLinks'>
					<ReactNav.Link className='helloLink' href='/about' 
					>
					</ReactNav.Link>
					<br/>
					<ReactNav.Link className='projectLink' href='/projects'>
					</ReactNav.Link>
					<br/>
					<ReactNav.Link className='contactLink' href='/contact'>
					</ReactNav.Link>
				</ReactNav>
			</Navbar>
		</div>
	);
}
