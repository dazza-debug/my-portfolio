import React from 'react';
import './Navigation.css';

export default function Navigation(){
	return(
		<div className="nav-bar">
			<ul>
				<li className="nav-item"><a href="#biography">Biography</a></li>
				<li className="nav-item"><a href="#portfolio">Portfolio</a></li>
			</ul>
		</div>
	);
}