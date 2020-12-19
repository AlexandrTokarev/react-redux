import { TaskList, Input } from '../components';
import React from 'react';
import { useSelector } from 'react-redux';

const Tasks = () => {
	const tasks = useSelector(state => state);

	return (
		<>
			<h1>Список задач</h1>
			<hr />

			<Input style={{ marginTop: 10 }} />

			<TaskList
				tasks={tasks}
			/>
		</>
	)
};

export default Tasks