import React from 'react';
import './ToTop.css';

const toTopofPage = (event) => {
	window.scrollTo(0, 0);
	if(event.currentTarget.id === "totop"){
		event.currentTarget.classList.toggle('totop-main-visible');
	}
}

export default function ToTop(){
	return(
		<div id="totop" onClick={toTopofPage} className="totop-main">
			<img alt="back to top" src={process.env.PUBLIC_URL + "/Logos/up-svgrepo-com.svg"}/>
		</div>
	)
}