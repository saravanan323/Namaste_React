import React from "react";
import ReactDOM from "react-dom/client";
import { FaUserCircle } from "react-icons/fa"; // For user icon

const ReacElementHeader = React.createElement("h1", { className: "title" }, [
	"Header 1 React.createElement",
	React.createElement("h2", { className: "title" }, [
		"Header 2 React.createElement",
		React.createElement(
			"h3",
			{ className: "title" },
			"Header 3 React.createElement",
		),
	]),
]);

const HeaderComponent = (tabIndex) => (
	<h1 id="heading" className="title" tabIndex={tabIndex}>
		Header 1 using Functional Component :)
		<h2 id="heading2" className="title" tabIndex={tabIndex}>
			Header 2 using Functional Component :)
			<h3 id="heading3" className="title" tabIndex={tabIndex}>
				Header 3 using Functional Component :)
			</h3>
		</h2>
	</h1>
);

const ProperHeaderComponent = () => {
	return (
		<header className="header">
			{/* Logo */}
			<div className="text-2xl font-bold">🌟 MyLogo</div>

			{/* Search Bar */}
			<div className="flex-grow mx-4">
				<input type="text" placeholder="Search..." className="search" />
			</div>

			{/* User Icon */}
			<div className="text-3xl">
				<FaUserCircle />
			</div>
		</header>
	);
};

const ReactJSXComponent = (
	<>
		<ProperHeaderComponent />
		<h1 className="title" tabIndex={5}>
			Header 1 using JSX :)
			<h2 className="title" tabIndex={5}>
				Header 2 using JSX :)
				<h3 className="title" tabIndex={5}>
					Header 3 using JSX :)
				</h3>
			</h2>
		</h1>
		<HeaderComponent tabIndex={5} />
	</>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([ReactJSXComponent, ReacElementHeader]);
