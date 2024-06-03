import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

let ArticleStyle = styled.div``;

const ReadProject = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles[slug - 1];
	const project = INFO.projects[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	ArticleStyle = styled.div`
		${article().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
				<meta name="keywords" content={project.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-project-logo-container">
						<div className="read-project-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-project-container">

						<div className="read-project-container-img">
							<img src={project.logo} alt="logo" />
						</div>
						<div className="read-project-container-info">
							<div className="read-project-back">
								<div 
									onClick={() => navigate(-1)} className="">
									<FontAwesomeIcon icon={faArrowCircleLeft} className="read-project-back-button" />
								</div>
							</div>

							<div className="read-project-wrapper">
								<div className="read-project-date-container">
									<div className="read-project-date">
										{project.date}
									</div>
								</div>

								<div className="title read-project-title">
									{project.title}
									<span className="read-project-subtitle">{project.type}</span>
								</div>
								<div className="separator"></div>

								<div className="read-project-tag">
									{project.keywords.join(" - ")}
								</div>

								<div className="read-project-body">
									<ArticleStyle>{project.description}</ArticleStyle>
								</div>
								<div className="title read-project-title" style={{justifyContent: "center"}}>
									screenshot
								</div>
								{project.screenshots.map((screenshot, index) => (
									<div key={index} className="read-project-screenshot">
										<img src={screenshot} alt="logo" />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadProject;
