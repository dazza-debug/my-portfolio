// import ReactDOM from 'react-dom'
import React from 'react';
import './Portfolio.css';
import portfData from './PortfData.js';

//potential code split
// const overlayItem = (event) => {
// 	event.currentTarget.lastChild.classList.toggle('hide');
// 	// event.currentTarget.lastChild.classList.toggle('portf-item-overlay-flex');
// }

export default function Portfolio() {
	return(
		<div id="portfolio" className="portf-main">
			<h1 className="portf-title">Portfolio</h1>
			<div className="portf-content">
				{
					portfData&&portfData.length>=1?portfData.map((item, id) => {
						return(
							<div key={id} id={`item${id}`} className="portf-item">
								<img className="portf-item-img" alt="name" src={item.imgUrl} width="600px" height="350px" />
								<h3>{item.name}</h3>
								<div className="portf-item-overlay">
									<p>{item.moreInfo}</p>
									<button 
										onClick={() => window.open(item.pageUrl)} 
										className={`portf-item-overlay-button ${item.pageUrl?'':'button-disabled'}`}>
										Visit Page
									</button>
									<button 
										onClick={() => window.open(item.sourceCode)}
										className={`portf-item-overlay-button ${item.sourceCode?'':'button-disabled'}`}>
										Source Code
									</button>
								</div>
							</div>
						);
					}):null
				}
			</div>
		</div>
	);
}