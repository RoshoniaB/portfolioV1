import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Home() {
	return (
		<div>
			<Navbar className='col-md-3'>
				<Navbar.Brand href='#home'>Navbar with text</Navbar.Brand>
				<Navbar.Brand href='#home'>Navbar with text</Navbar.Brand>
				<Navbar.Brand href='#home'>Navbar with text</Navbar.Brand>
			</Navbar>
		</div>
	);
}
