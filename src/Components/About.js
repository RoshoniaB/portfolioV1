import React from 'react';
import './component.css';
import Nav from './Nav.js';

export default function About() {
	return (
		<div className='aboutContainer'>
			<Nav />
			<h1 className='aHeading'>
				I design creative & accessible apps for everyone
			</h1>
			<h3 className='aTitle'>About</h3>
			<br />
			<main className='aboutContent'>
				<p>
					Hello. I’m Roshonia and I’m a jack of all trades. I am a
					multi-disciplinary maker with over 5 years of experiences in a wide
					range of roles including supervisor, saleswoman, full-stack developer,
					diy enthusiast and more. I do not like to define myself by the work
					that I have done, but I believe what I love to do and how I can use
					that to serve the world is truly what defines me.
				</p>
				<br />
				<p>
					Any skill can be taught if your will is great enough, however
					character is inherent. I prefer to keep learning, continue challenging
					myself, and do interesting things that matter.I’m easily inspired and
					more than willing to follow my fascinations wherever they take me.
				</p>
				<br />
				<p>
					I’m passionate about developing, expressive, multi-talented spirit
					with a natural ability to entertain and inspire. I’m never satisfied
					to just come up with ideas. Instead I have an almost impulsive need to
					act on them. My abundant energy fuels me in the pursuit of many
					interests, hobbies, areas of study and artistic endeavors. I’m a fast
					learner, able to pick up new skills and juggle different projects and
					roles with relative ease. I like to develop expertise in a number of
					areas over the course of my life and career. I’m a people-person with
					deep emotions and empathy, a natural storyteller. I’m able to inspire
					and am at my best when I’m sharing my creative expressions with
					others.
				</p>
				<a
					className='resume'
					href='https://drive.google.com/file/d/15u18KGWnrIJML__iRPCdiaHMB_iL1NW4/view?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'>
					My resume
				</a>
			</main>
		</div>
	);
}
