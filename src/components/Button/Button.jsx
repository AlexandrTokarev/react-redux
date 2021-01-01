import React from 'react';

import './Button.scss'

const Button = ({ children, ...restProps }) => {
	return (
		<button className='btn' {...restProps}>{children}</button>
	);
}

export default Button;