import React from 'react';

import './Input.scss';

const Input = ({ type = 'text', ...restProps }) => <input className='my-input' type={type} {...restProps}/>;

export default Input;