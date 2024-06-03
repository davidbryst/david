import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";
import { language } from "../../data/languagePage";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">{language.home.fr}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">{language.about.fr}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">{language.projects.fr}</Link>
						</li>
						{/* <li className="footer-nav-link-item">
							<Link to="/articles">{language.articles.fr}</Link>
						</li> */}
						<li className="footer-nav-link-item">
							<Link to="/contact">{language.contact.fr}</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 dbryst. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
