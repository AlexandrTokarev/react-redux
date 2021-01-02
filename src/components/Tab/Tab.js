import React from 'react';

const Tab = ({ title, index, isActive, onClick }) => {
	return (
		<li className={`tabs__item ${isActive ? 'active' : ''}`} onClick={() => onClick(index)}>
			{title}
		</li>
	);
};

export default Tab;
