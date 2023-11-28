import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
 
import "./styles/work.css";

const Work = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-work">
				<div className="homepage-work-content">
					<div className="homepage-work-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-work-title">{title}</div>
					<div className="homepage-work-description">
                        <ul>
                            {description.map((item, index) => (
                            <li key={index}>{item}</li>
                            ))}
                        </ul>
					</div>
					{/* <div className="homepage-work-link">
						<Link to={link}>
							Read work{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Work;
