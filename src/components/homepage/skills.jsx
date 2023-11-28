import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Skills = () => {
	return (
		<div className="work">
			<Card
				icon={faBriefcase}
				title="Skills"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./icons/python.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Python</div>
						</div>

						<div className="work">
							<img
								src="./icons/java.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Java</div>
						</div>

                        <div className="work">
							<img
								src="./icons/C.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">C Programming</div>
						</div>

                        <div className="work">
							<img
								src="./icons/C-sharp.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">C# Programming</div>
						</div>

                        <div className="work">
							<img
								src="./icons/html.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">HTML</div>
						</div>

                        <div className="work">
							<img
								src="./icons/css.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">CSS</div>
						</div>

                        <div className="work">
							<img
								src="./icons/javascript.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">JavaScript</div>
						</div>

                        <div className="work">
							<img
								src="./icons/sql.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">SQL</div>
						</div>

                        <div className="work">
							<img
								src="./icons/react.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">React</div>
						</div>

                        <div className="work">
							<img
								src="./icons/unity.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Unity</div>
						</div>

                        <div className="work">
							<img
								src="./icons/git.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Git</div>
						</div>

                        <div className="work">
							<img
								src="./icons/android-studio.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Android Studio</div>
						</div>

                        <div className="work">
							<img
								src="./icons/nodejs.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Node.js</div>
						</div>

                        <div className="work">
							<img
								src="./icons/mongodb.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">MongoDB</div>
						</div>

                        <div className="work">
							<img
								src="./icons/mysql.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">MySQL</div>
						</div>

                        <div className="work">
							<img
								src="./icons/postgresql.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">PostGreSQL</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Skills;
