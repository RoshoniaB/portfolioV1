import React from 'react';
import { Nav as ReactNav, Navbar, Image } from 'react-bootstrap';
import './home.css';

export default function Home(props) {
	return (
		<div className='home'>
			<Image src='img/headshot.png' className='headshot'></Image>
			<div style={{ position: 'relative' }}>
				<Navbar className=' homeNavbar '>
					<ReactNav className='mr-auto hLinks'>
						<ReactNav.Link
							className='helloLink'
							href='/about'
							style={{ color: props.props.font }}></ReactNav.Link>
						<br />
						<ReactNav.Link
							className='projectLink'
							href='/projects'></ReactNav.Link>
						<br />
						<ReactNav.Link
							className='contactLink'
							href='/contact'></ReactNav.Link>
					</ReactNav>
				</Navbar>
			</div>
			{/* <h1 className='navbar sub'>a Developer</h1> */}
		</div>
	);
}
