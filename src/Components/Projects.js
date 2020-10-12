import React from 'react';
import Nav from './Nav.js';

export default function Projects() {
	const projects = [
		{
			title: 'whosrunning',
			link: 'https://whos-running.netlify.app/',
			gif: 'https://media.giphy.com/media/iXCVxbdnfDgNSLf8ko/giphy.gif',
			alt: 'whos-running',
			backend: 'https://github.com/blewin1/whosRunningBackend',
			github: 'https://github.com/blewin1/whosRunningFrontend',
		},
		{
			title: 'Aroma',
			link: 'https://aroma-frontend.herokuapp.com/',
			gif: 'https://media.giphy.com/media/4ZnrKflBC1aRLxQP98/giphy.gif',
			backend: 'https://aroma-backend.herokuapp.com/wines/',
			alt: 'aroma',
			github: 'https://github.com/RoshoniaB/aroma-frontend',
		},
		{
			title: 'flickcritic.',
			link: 'https://flickcritic-frontend.herokuapp.com/',
			gif: 'https://media.giphy.com/media/HVruuQcKoK25TUUhn2/giphy.gif',
			backend: 'https://github.com/GroupFlickCritic/backend',
			alt: 'flickcritic',
			github: 'https://github.com/GroupFlickCritic/frontend',
		},
		{
			title: 'Familiar',
			link: 'https://familiarapp.herokuapp.com/',
			alt: 'fammiliar',
			gif: 'https://media.giphy.com/media/ZAFDrkOkA0ubSzSBr7/giphy.gif',
			github: 'https://github.com/RoshoniaB/familiar',
		},
		{
			title: 'Random Jeopardy',
			link: 'https://roshoniab.github.io/rando-jeopardy/',
			alt: 'random-jeopardy',
			gif: 'https://media.giphy.com/media/0u51GSPpabmbXSiGhB/giphy.gif',
			github: 'https://github.com/RoshoniaB/rando-jeopardy',
		},
	];
	return (
		<div className='projectsContainer'>
			<h3 className='pHeading'>Projects</h3>
			<Nav />
			{projects.map((project) => {
				return (
					<div className='project'>
						<h5 className='pTitle'>{project.title}</h5>
						<div
							style={{
								width: '10%',
								paddingBottom: '10%',
								position: 'relative',
							}}>
							<a href={project.link} target='_blank' rel='noopener noreferrer'>
								<img
									src={project.gif}
									alt={project.alt}
									allowFullScreen
									async
									className='projectpic'
								/>
							</a>
						</div>
						<a href={project.backend} target='_blank' rel='noopener noreferrer'>
							<h4 style={{ color: '#8e793e', textDecoration: 'none' }}>
								Github Backend
							</h4>
						</a>
						<a href={project.github} target='_blank' rel='noopener noreferrer'>
							<h4 style={{ color: '#8e793e', textDecoration: 'none' }}>
								Github Frontend
							</h4>
						</a>
					</div>
				);
			})}
		</div>
	);
}
