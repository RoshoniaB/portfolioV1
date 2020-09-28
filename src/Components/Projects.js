import React from 'react'
import Nav from './Nav'

export default function Projects() {
    return (
			<div className='projectsContainer'>
				<h3 className='pHeading'>Projects</h3>
                <Nav />
                <br />
				<h5 className='pTitle'>Random Jeopardy</h5>
				<a href='https://roshoniab.github.io/rando-jeopardy/index.html'>
					<img className='projectpic' alt='jeo' src='img/project1.png' />
				</a>
                <br />
				<h5 className='pTitle'>Familiar</h5>
				<a href='https://familiarapp.herokuapp.com/'>
					<img className='projectpic' alt='jeo' src='img/project2.png' />
				</a>

                <br />
				<h5 className='pTitle'>flickcritic.</h5>
				<a href='https://flickcritic-frontend.herokuapp.com/'>
					<img alt='jeo' className='projectpic' src='img/project3.png' />
				</a>
                <br />
				<h5 className='pTitle'>Aroma</h5>
				<a href='https://aroma-frontend.herokuapp.com/'>
					<img alt='jeo' className='projectpic' src='img/project4.png' />
				</a>
			</div>
		);
}
