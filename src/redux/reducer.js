import { v4 as uuid } from 'uuid';
import { ADD_TASK, DELETE_TASK, TOGGLE_TODO } from './constants';

const initialState = [
	{
		id: uuid(),
		title: 'Сходить в магазин',
		completed: true
	},
	{
		id: uuid(),
		title: 'Проверить новый функционал',
		completed: true
	},
	{
		id: uuid(),
		title: 'Внести правки в макет',
		completed: false
	},
	{
		id: uuid(),
		title: 'Дописать документацию',
		completed: false
	}
]

const reducer = (state = initialState, { type, payload }) => {
	//console.log('reducer', type, payload)
	switch (type) {
		case ADD_TASK:
			return [...state, { ...payload }];
		case DELETE_TASK:
			return state.filter(task => task.id !== payload);
		case TOGGLE_TODO:
			return state.map(task => (task.id === payload)
				? { ...task, completed: !task.completed }
				: task
			)

		default: {
			return state;
		}
	}
};

export default reducer;