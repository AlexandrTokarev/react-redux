import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { TaskList, Input, Button } from '../components';
import { ADD_TASK } from '@/redux/constants';


const Tasks = () => {
	const tasks = useSelector(state => state);
	const dispatch = useDispatch();

	const [title, setTitle] = useState('');

	const onChangeTitle = ({ target: { value }}) => {
		setTitle(value)
	};

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch({
			type: ADD_TASK,
			payload: {
				id: uuid(),
				title,
				complete: false
			}
		})

		setTitle('')
	}
	

	return (
		<>
			<form onSubmit={onSubmit}>
				<h1>Список задач</h1>
				<hr />

				<div style={{ display: 'flex', alignItems: 'center', padding: '50x 0', marginTop: 10 }}>
					<Input value={title} onChange={onChangeTitle}/>&nbsp;
					<Button style={{ height: '100%' }} disabled={title === ''} type='submit'>Добавить</Button>
				</div>
			</form>
			

			<TaskList
				tasks={tasks}
			/>
		</>
	)
};

export default Tasks