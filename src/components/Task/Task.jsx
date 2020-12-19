import React from 'react';
import Button from '../Button/Button';

import './Task.scss';

const Task = ({ task }) => {
	return (
		<div className='tasks__item'>
			<li style={{ width: '30%' }}>{task.title}</li>
			<i className={task.completed ? 'fa fa-check' : 'fa fa-times'}></i>
			<Button>Удалить</Button>
		</div>
	);
}

export default Task;