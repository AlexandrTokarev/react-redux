import React from 'react';
import { Button, Input } from '@/components';

import './ComponentsList.scss';

const ComponentsList = () => {

	return (
		<div className='components'>
			<div className='components__card'>
				<h3 className='components__title'>Кнопки</h3>
				<hr/>
				{['success', 'primary', 'danger', 'default'].map(color => <Button key={color} style={{ marginRight: 5 }} color={color}>{color}</Button>)}
			</div>

			<div className='components__card'>
				<h3 className='components__title'>Текстовое поле</h3>
				<hr/>
				<Input/>
			</div>
		</div>
	)
};

export default ComponentsList