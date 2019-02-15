//reducer是一个纯函数
import {CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './constants';

const defaultState = {
	inputValue: '',
	list: []
};
const reducer = function (state = defaultState, action) {
	const newState = state;
	switch (action.type) {
		case CHANGE_INPUT_VALUE:
			newState.inputValue = action.value;
			return newState;
		case ADD_ITEM:
			newState.list.push(state.inputValue);
			newState.inputValue = '';
			return newState;
		case DELETE_ITEM:
			newState.list.splice(action.index, 1);
			return newState;
		default:
			return state;
	}
};

export default reducer;


