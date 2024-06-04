import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import CircularIndicator from "../components/common/circularIndicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faPen } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title.fr}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description.fr}
								</div>
								
								<div>
									<div className="homepage-articles-header-title"><FontAwesomeIcon className="homepage-articles-header-icon" icon={faPen} /> competences graphiques</div>
									<div className="subtitle about-subtitle">
										{INFO.graphicSkills.map((skill) => (
											<div className="about-skills-indicater">
												<CircularIndicator title={skill.title} value={skill.percent} icon={skill.icon} />
											</div>
										))}
									</div>
								</div>

								<div>
									<div className="homepage-articles-header-title"><FontAwesomeIcon className="homepage-articles-header-icon" icon={faBriefcase} /> competences full-stack web et mobiles </div>
									<div className="subtitle about-subtitle">
										{INFO.skills.map((skill) => (
											<div className="about-skills-indicater1">
												{/* <CircularIndicator title={skill.title} value={skill.percent} icon={skill.icon} /> */}
												{/* <span>{skill.percent}%</span> */}
												<div className="about-skills-indicater1-img">
													<img src={skill.icon} alt={skill.title} />
												</div>
												<span className="about-skills-indicater1-subtitle">{skill.title}</span>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											// src="about.jpg"
											src="_ME2.jpeg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;
