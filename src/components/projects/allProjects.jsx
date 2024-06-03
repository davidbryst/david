import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import Design from "./design";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						type={project.type}
						description={project.description}
						linkText={project.linkText}
						link={"/project/" + (index + 1)}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
