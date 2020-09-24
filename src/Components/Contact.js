import React from 'react';
import Nav from './Nav.js';

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
				<a href='https://www.roshoniabrooks@gmail.com'>
					<img className='email' src='img/email.png' alt='email' />
				</a>
				<a href='https://www.linkedin.com/in/roshonia-brooks/'>
					<img className='linkedin' src='img/goldLinkedin.png' alt='linkedin' />
				</a>
				<a href='https://github.com/RoshoniaB'>
					<img className='github' src='img/goldGit.png' alt='github' />
				</a>
			</footer>
		</div>
	);
}
