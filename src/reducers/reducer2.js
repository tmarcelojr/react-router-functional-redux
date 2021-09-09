import { EXAMPLE_START } from '../actions';
const exampleState = {
	example: '',
	isExample: true,
	errors: ''
};
function reducer2(state = exampleState, action) {
	switch (action.type) {
		case EXAMPLE_START:
			return { ...state, isExample: false };

		default:
			return state;
	}
}

export default reducer2
