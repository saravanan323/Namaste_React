import React from "react";
import ReactDOM from "react-dom/client";

/* Header
	- Logo 
	- Nav Menu
		- Home
		- About Us
		- Contact Us
		- Cart
   Body
    - search
	- restaurant container 
	- restaruant card
   Footer
	
*/

const Header = () => {
	return (
		<div className="header">
			<img
				className="logo"
				src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"
			/>
			<ul>
				<li>HOME</li>
				<li>ABOUT US</li>
				<li>CONTACT US</li>
				<li>CART</li>
			</ul>
		</div>
	);
};

const ResCard = () => {
	return (
		<div className="res-card">
			<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/11621595-920c-41ed-982e-8ce0c0017cd7_23681.jpg" />
			<div>ITEMS AT ₹139</div>
			<div>McDonald's</div>
			<div>4.4 • 35-40 mins</div>
			<div>Burgers, Beverages, Cafe, Desserts</div>
			<div>Indiranagar</div>
		</div>
	);
};

const ResContainer = () => {
	return (
		<div className="res-container">
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
			<ResCard />
		</div>
	);
};

const Body = (
	<div className="body">
		<Header />
		<div className="search-container">
			<input className="search" placeholder="Search......." />
		</div>
		<ResContainer />
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Body);
