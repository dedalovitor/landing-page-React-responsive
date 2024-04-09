import React from "react";
import Card from "./card";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="container">
				<div className="row d-flex row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

					<Card />
					<Card />
					<Card />
					<Card />

				</div>
			</div>
		</div>

	);
};

export default Home;
