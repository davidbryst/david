import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/fromation.css";

const Fromations = () => {
	return (
		<div className="fromations">
			<Card
				icon={faBook}
				title="Fromation"
				body={
					<div className="fromations-body">
						<div className="fromation">
							<img
								src="./facebook.png"
								alt="facebook"
								className="fromation-image"
							/>
							<div className="fromation-title">Licence,Technologies du Web et Images Numérique</div>
							<div className="fromation-subtitle">
								École Supérieure Africaine des TIC
							</div>
							<div className="fromation-duration">2019 - 2022</div>
						</div>

						<div className="fromation">
							<img
								src="./twitter.png"
								alt="twitter"
								className="fromation-image"
							/>
							<div className="fromation-title">Baccalauréat D</div>
							<div className="fromation-subtitle">
								Lycée Classique D'Abidjan
							</div>
							<div className="fromation-duration">2017 - 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Fromations;
