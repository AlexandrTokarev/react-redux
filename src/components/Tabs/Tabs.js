import React from 'react';

import './Tabs.scss';

const Tabs = ({ activeTab, onActiveTabChange, children }) => {
	return (
		<div className="tabs">
			<ul className="tabs__nav">
				{React.Children.map(children, (child, idx) =>
					React.cloneElement(child, {
						index: idx,
						isActive: activeTab === idx,
						onClick: onActiveTabChange
					})
				)}
			</ul>

			<div className="tabs__content">
				{children[activeTab] && children[activeTab].props.children}
			</div>
		</div>
	);
};

export default Tabs;