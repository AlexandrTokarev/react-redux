import React from 'react';

import './Button.scss'

const Button = ({ className, color = 'default', children, ...restProps }) => {
	return (
		<button className={`btn btn-${color} ${className}`} {...restProps}>{children}</button>
	);
}

export default Button;