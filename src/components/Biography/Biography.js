import React from 'react';
import './Biography.css';
import {bioData} from './BioData.js';

export default function Biography() {
	// console.log(bioData);
	return(
		<div className="bio-main">
			<h1 className="bio-title">A bit about me..</h1>
			<div className="bio-about">
				<div className="bio-content-left">
					<p>
					I began my development career learning how to develop games in unity using C#.
					After a couple of years I decided to learn and become a web developer. So, I went ahead
					and completed both The Complete Web Developer, and The Complete Junior to Senior Web Developer Roadmap
					courses from the ZTM Academy. During this learning process I grew a passion for web development and started
					on my own projects (see portfolio). I am confident and competent as a full-stack web developer and I am the
					perfect fit for you company.
					</p>
{/*					<h3>- I am a Full-stack Web Developer, Game Developer and have a certificate III in IT.</h3> 

					<h3>- I have many skills in numerous different programming languages and node packages.</h3>

					<h3>- I have over 2 years of experience in the devlopment industry</h3>*/}
					{/*<h3>I'm proficient in C#, JavaScript, HTML, CSS, React, Expressjs, Docker, Redis and PostgreSQL.</h3>*/}
				</div>
				<div className="bio-content-right">
					<h3>My Skills and Knowladge range through these things but, not limited to:</h3>
					<div className="bio-content-right-logos">
						{
							bioData.length>1&&bioData?bioData.map((item, id) => {
								return(
									<img alt={item.name} src={item.url} key={id} width="100px"/>
								);
							}) : null
						}
					</div>
					{/*<p>C#, JS, HTML, CSS, React, Express, Docker, Redis, Postgres, Typescript, CI/CD, Redux, Module Bundling, Security, SSH, JWT and Sessions, Jestjs</p>*/}
				</div>
			</div>
		</div>
	);
}