import { DELETE_TASK, TOGGLE_TODO } from '@/redux/constants';
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

	const onClickChange = () => {
		dispatch({
			type: TOGGLE_TODO,
			payload: task.id
		})
	};

	return (
		<div className={`tasks__item ${task.completed ? 'tasks__item-completed' : ''}`}>
			<li style={{ width: '30%' }}>{task.title}</li>
			<i className={task.completed ? 'fa fa-check' : 'fa fa-times'} style={{ width: '20%' }}/>
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
				<Button
					onClick={onClickChange}
					color={task.completed ? 'primary' : 'success'}
				>
					<i className={`fa fa-${task.completed ? 'times' : 'check'}`}/> {task.completed ? 'Отменить' : 'Выполнить'}
				</Button>&nbsp;
				<Button onClick={onClickDelete} color='danger'><i className='fa fa-trash-alt'/> Удалить</Button>
			</div>
			
		</div>
	);
}

export default Task;