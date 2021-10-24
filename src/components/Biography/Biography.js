import React from 'react';
import './Biography.css';
import {bioData} from './BioData.js';

export default function Biography() {
	// console.log(milestone);
	return(
		<div id="biography" className="bio-main">
			<h1 className="bio-title">A bit about me . . .</h1>
			<div className="bio-about">
				<div className="bio-content-left">
					<div className="bio-content-left-top">
						<h3>Biography</h3>
						<p><i>
							"I began my development career learning how to develop games in unity using C#.
							After some time I decided to learn and become a web developer. So, I went ahead
							and completed both The Complete Web Developer, and The Complete Junior to Senior Web Developer Roadmap
							courses from the ZTM Academy. During this learning process I grew a passion for web development and started
							on my own projects (see portfolio). I am confident and competent as a full-stack web developer and I am the
							perfect fit for your company. I love to code and build big projects by using best practices in the industry."
						</i></p>
					</div>
					<div className="bio-content-left-bottom">
						<h3>Milestones</h3>
						<div className="milestone"><p>Completed "Complete C# Unity Developer 2D" (Udemy)</p></div>
						{/*<div className="milestone"><p>Began Project "Retailer Tycoon" (50% complete)</p></div>*/}
						<div className="milestone"><p>Completed "Certificate III in information, digital media and technology" course (TAFE)</p></div>
						<div className="milestone"><p>Completed "The Complete Web Developer Zero to Mastery" course (Udemy)</p></div>
						<div className="milestone"><p>Began project "H M Movie Motors" (95% complete)</p></div> 
						<div className="milestone"><p>Completed "The Complete Junior to Senior Web Developer Roadmap" course (Udemy)</p></div>
					</div>
				</div>
				<div className="bio-content-right">
					{/*<h3>My Skills and Knowladge range through these things but, not limited to:</h3>*/}
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