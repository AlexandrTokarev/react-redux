import { DELETE_TASK } from '../../redux/constants';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';

import './Task.scss';

const Task = ({ task }) => {
	const dispatch = useDispatch();

	const onClickDelete = () => {
		dispatch({
			type: DELETE_TASK,
			payload: task.id
		})
	}

	return (
		<div className='tasks__item'>
			<li style={{ width: '30%' }}>{task.title}</li>
			<i className={task.completed ? 'fa fa-check' : 'fa fa-times'}></i>
			<Button onClick={onClickDelete}>Удалить</Button>
		</div>
	);
}

export default Task;