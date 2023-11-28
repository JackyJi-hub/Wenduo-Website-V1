import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Work from "../components/works/work";

import INFO from "../data/user";
import SEO from "../data/seo";
import myWorks from "../data/works";

import "./styles/works.css";

const Works = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "works");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Works | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="works" />
				<div className="content-wrapper">
					<div className="works-logo-container">
						<div className="works-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="works-main-container">
						<div className="title works-title">
							{INFO.works.title}
						</div>

						<div className="subtitle works-subtitle">
							{INFO.works.description}
						</div>

						<div className="works-container">
							<div className="works-wrapper">
								{myWorks.map((work, index) => (
									<div
										className="works-work"
										key={(index + 1).toString()}
									>
										<Work
											key={(index + 1).toString()}
											date={work().date}
											title={work().title}
											description={work().description} 
										/>
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

export default Works;
