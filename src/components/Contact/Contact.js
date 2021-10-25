import React from 'react';
import './Contact.css'

export default function Contact () {
	return(
		<div id="contact" className="cont-main">
			<h1 className='cont-title'>Want to contact me?</h1>
			<div className="cont-content">
				<div className="cont-item">
					<img alt="email" src={process.env.PUBLIC_URL + "/Logos/email-svgrepo-com.svg"} width="50px" />
					<div className="cont-item-info">
						<h3>Email:</h3>
						<p>sevotech.st@gmail.com</p>
					</div>
				</div>
				<div className="cont-item">
					<img alt="linkedIn" src={process.env.PUBLIC_URL + "/Logos/linkedin-svgrepo-com.svg"} width="50px" />
					<div className="cont-item-info">
						<h3>LinkedIn:</h3>
						<p><a href="https://linkedin.com/in/darian-seovic18" rel="noreferrer" target="_blank">https://linkedin.com/in/darian-seovic18</a></p>
					</div>
				</div>
				<div className="cont-item">
					<img alt="github" src={process.env.PUBLIC_URL + "/Logos/github-svgrepo-com.svg"} width="50px" />
					<div className="cont-item-info">
						<h3>Github:</h3>
						<a href="https://github.com/dazza-debug" rel="noreferrer" target="_blank">https://github.com/dazza-debug</a>
					</div>
				</div>

			</div>
		</div>
	)
} 