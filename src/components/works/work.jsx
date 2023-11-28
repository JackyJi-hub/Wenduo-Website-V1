import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/work.css";

const Work = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="work">
				<div className="work-left-side">
					<div className="work-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="work-right-side">
						<div className="work-title">{title}</div>
						<div className="work-description">
                            <ul>
                                {description.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
						{/* <div className="work-link">
							Read Work{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div> */}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Work;
