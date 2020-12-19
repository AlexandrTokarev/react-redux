import { v4 as uuid } from 'uuid';
import { ADD_TASK } from './constants';

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

const reducer = (state = initialState, { type, ...rest }) => {
	//console.log('reducer', type, rest)
	switch (type) {
		case ADD_TASK:
			return [...state, { ...rest, completed: false }];

		default: {
			return state;
		}
	}
};

export default reducer;