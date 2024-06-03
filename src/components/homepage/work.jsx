import React from "react";

import "./styles/work.css";

const Work = (props) => {
	const { img, dateStart, dateEnd, company, workstation, description } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						{dateStart.fr}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{dateEnd.fr}
					</div>
					<div className="homepage-article-header">
						<img
							src={img}
							alt={company}
							className="homepage-article-image"
						/>

						<div className="homepage-article-title">{company.fr} <br /> <span  className="homepage-article-subtitle">{workstation.fr}</span> </div>
					</div>
					<div className="homepage-article-description">
						{description.map((ele, index)=>(
							<li className="homepage-article-subtitle" key={index}>
								<span className="homepage-article-dote">{ele[0].fr}</span>
								<br />
								{ele[1].fr}
							</li>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Work;
