import React from "react";

import "./styles/circularIndicator.css";

const CircularIndicator = (props) => {
	const { title, value, icon } = props;
	return (
		<div className="circular">
			<div class='single-chart'>

                <svg viewBox='0 0 36 36' class='circular-chart orange'>

                    <path class='circle-bg' d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' />

                    <path class='circle' stroke-dasharray={value+', 100'} d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' />


                    <text x='18' y='20.35' class='percentage'>{value}</text>

                </svg>
                <div className="circle-img">
                    <img src={icon} alt={title} />
                </div>

            </div>
            <text class='percentage' style={{fontSize: "15px"}}>{value}%</text>
		</div>
	);
};

export default CircularIndicator;