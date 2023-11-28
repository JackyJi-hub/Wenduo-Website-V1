import React from "react";

function work_experience_1() {
	return {
		date: "January 2024 - April 2024",
		title: "Ceridian Frontend Developer",
		description: ["Starting in January of 2024"],
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: ``,
		body: (
			<React.Fragment>
				<div className="work-content">
					<div className="paragraph">Content of work 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function work_experience_2() {
	return {
		date: "May 2023 - August 2023",
		title: "KPMG Full Stack Software Developer",
		description: ["Led the development of cutting-edge Pay Equity tools utilizing Python, JavaScript, React, SQL, and Pandas, empowering organizations to devise robust pay equity strategies and effectively bridge the gender wage gap",
                    "Collaborated closely with the engagement team to meticulously translate complex business and analytics requirements into a comprehensive data strategy, encompassing efficient ETL processes, refined data modeling, and strategic staging for seamless analysis",
                    "Maintained an active role in agile scrum meetings, conducting rigorous code reviews through Microsoft Azure, and implementing thorough unit testing protocols to achieve an impressive software test coverage of 97% across all software products developed"],
        style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of work 2</h1>
			</React.Fragment>
		),
	};
}

function work_experience_3() {
	return {
		date: "June 2019 - Present",
		title: "Little Mountain Studio Game Developer",
		description: ["Created game projects using C# and Unity that are currently available on the App Store and Google Play with 1000+ downloads",
    "Managed client-side server connections using Firebase to securely store over 1000 users’ information and game content",
    "Managed a team of 5 designers and software engineers and hosted Agile Scrum meetings to ensure project progression",
    "Created promotional campaigns through Facebook Ads Manager which led to a 600% increase in downloads and attraction"],
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of work 2</h1>
			</React.Fragment>
		),
	};
}

const myWorks = [work_experience_1, work_experience_2, work_experience_3];

export default myWorks;
