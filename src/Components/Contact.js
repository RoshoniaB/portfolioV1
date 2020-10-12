import React from 'react';
import Nav from './Nav.js';
import ContactNav from './ContactNav.js'

export default function Contact() {
	return (
		<div className='contactContainer'>
			<Nav />
			<h1 className='cHeading'>Connect with me!</h1>
			<br />
			<br />
			<h3 className='cTitle'>Contact</h3>
			<br />
			<p className='cContent'>
				I'm seeking out opportunities to collaborate with companies/ agencies/
				individuals, not just work for them. I want to bring my collective
				design experience to the table where we can work together to solve real
				business-problems in a way that optimizes all of our respective
				experience and knowledge.
			</p>
			<br />
			<p className='cContent'>
				Feel free to reach out throught any of the platforms below:
			</p>
			<footer className='contactLinks'>
				<ContactNav />
			</footer>
		</div>
	);
}
