
// function article_0() {
// 	return {
// 		date: "7 May 2023",
// 		title: "The Benefits of Cloud Computing",
// 		description:
// 			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
// 		keywords: [
// 			"The Benefits of Cloud Computing",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		style: `
// 				.article-content {
// 					display: flex;
// 					flex-direction: column;
// 					align-items: center;
// 				}

// 				.randImage {
// 					align-self: center;
// 					outline: 2px solid red;
// 				}
// 				`,
// 		body: (
// 			<React.Fragment>
// 				<div className="article-content">
// 					<div className="paragraph">Content of article 1</div>
// 					<img
// 						src="https://picsum.photos/200/300"
// 						alt="random"
// 						className="randImage"
// 					/>
// 				</div>
// 			</React.Fragment>
// 		),
// 	};
// }

function article_1() {
	return {
		img: "./emaiv.png",
		dateStart: {en: "Jan 2024", fr: "Jan 2024",},
		dateEnd: {en: "in progress", fr: "en cours",},
		company: {en: "EMAIV-JC", fr: "EMAIV-JC",},
		workstation: {en: "Web developer infographic", fr: "Infographe développeur web",},
		description:[
			[
				{en: "Creation of complete and functional websites:", fr: "Création de sites web complets et fonctionnels :",},
				{en: "Website development from start to finish, integrating front-end, back-end and database skills.", fr: "Développement de sites web du début à la fin, en intégrant des compétences en front-end, back-end et base de données.",},
			],
			[
				{en: "Creation of attractive and informative visuals:", fr: "Création de visuels attrayants et informatifs :",},
				{en: "Conception de graphiques, d'illustrations et d'autres éléments visuels pour communiquer des idées de manière claire et engageante.", fr: "Conception de graphiques, d'illustrations et d'autres éléments visuels pour communiquer des idées de manière claire et engageante.",},
			],
		]
	};
}

function article_2() {
	return {
		img: "./bim.png",
		dateStart: {en: "Jul 2022", fr: "Jul 2022",},
		dateEnd: {en: "Sep 2023", fr: "Sep 2023",},
		company: {en: "Bim Groupe", fr: "Bim Groupe",},
		workstation: {en: "Mobile Developer", fr: "Développeur Mobile",},
		description:[
			[
				{en: "Improved user experience (UX) and user interface (UI): ", fr: "Amélioration de l'expérience utilisateur (UX) et de l'interface utilisateur (UI) :",},
				{en: "Design and development of attractive and intuitive interfaces, optimized for different devices.", fr: "Conception et développement d'interfaces attrayantes et intuitives, optimisées pour différents appareils.",},
			],
			[
				{en: "Optimization for different browsers and devices:", fr: "Optimisation pour différents navigateurs et appareils :",},
				{en: "Ensure consistent display and optimal user experience across a variety of screen sizes.", fr: "Assurer un affichage cohérent et une expérience utilisateur optimale sur une variété de tailles d'écran.",},
			],
			[
				{en: "Collaboration with front-end developers:", fr: "Collaboration avec les développeurs front-end : ",},
				{en: "Work closely with front-end developers to seamlessly integrate designs and resolve technical issues.", fr: "Travail en étroite collaboration avec les développeurs front-end pour intégrer de manière transparente les conceptions et résoudre les problèmes techniques.",},
			],
		]
	};
}



const myWorks = [article_1, article_2];

export default myWorks;
