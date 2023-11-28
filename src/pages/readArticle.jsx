import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myWorks from "../data/works";

import "./styles/readWork.css";

let WorkStyle = styled.div``;

const ReadWork = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const work = myWorks[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [work]);

	WorkStyle = styled.div`
		${work().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${work().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={work().description} />
				<meta name="keywords" content={work().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-work-logo-container">
						<div className="read-work-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-work-container">
						<div className="read-work-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-work-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-work-wrapper">
							<div className="read-work-date-container">
								<div className="read-work-date">
									{work().date}
								</div>
							</div>

							<div className="title read-work-title">
								{work().title}
							</div>

							<div className="read-work-body">
								<WorkStyle>{work().body}</WorkStyle>
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

export default ReadWork;
