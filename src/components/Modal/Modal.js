import React from 'react';

import './Modal.scss';

const Modal = ({ show, onClose, children }) => {
	if (!show)
		return null

	const onClickBg = (e) => {
		e.preventDefault()

		onClose && onClose();
	};

	return (
		<div>
			<div className='modal'>
				{children}
			</div>
			<div className='bg' onClick={onClickBg}/>
		</div>
	)
};

export default Modal