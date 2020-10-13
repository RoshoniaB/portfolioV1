import React from 'react'
import { Navbar } from 'react-bootstrap';

export default function Nav() {
    return (
        <div>
            <Navbar className='navbar'>
			<Navbar.Brand href='/'><h2 className='homeNav'> </h2></Navbar.Brand>
            </Navbar>
        </div>
    )
}
