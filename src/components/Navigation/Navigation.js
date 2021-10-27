import React from 'react';
import './Navigation.css';

export default function Navigation (){
	// componentDidMount() {
	// 	window.addEventListener("scroll", this.fancyScroll);
	// }
	// componentWillUnmount() {
	// 	window.removeEventListener("scroll", this.fancyScroll);
	// }

	// //Too glitchy
	// fancyScroll = () => {
	//   console.log('calling');
	//   if(window.scrollY > 50){
	//     document.getElementById("navigation").className = "nav-bar-condensed"
	//   }
	//   else if (window.scrollY < 15){
	//     document.getElementById("navigation").className = "nav-bar"
	//   }
	// }

	return(
		<div id="navigation" className="nav-bar">
			<ul>
				<li className="nav-item"><a href="#biography">Biography</a></li>
				<li className="nav-item"><a href="#portfolio">Portfolio</a></li>
				<li className="nav-item"><a href="#contact">Contact</a></li>
				<li className="nav-item"><a href={process.env.PUBLIC_URL + "/Darian Seovic Resume 2021 Web Dev.pdf"}>Resumè</a></li>
			</ul>
		</div>
	);
}