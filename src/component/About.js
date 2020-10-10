import React from 'react';
import 'antd/dist/antd.css';

const About = (props) => {
	let resumeData = props.resumeData;

	return (
		<section id="about" className="aboutSection">
			<div className='nine columns main-col'>
				<h1 id='aboutSe'>About me</h1>
				<p id='paragraph'>
					{
						resumeData.aboutme
					}
				</p>
			</div>
		</section>

	)
}

export default About;