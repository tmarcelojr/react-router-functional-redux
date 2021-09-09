import { GET_URL_START, GET_URL_SUCCESS, GET_URL_FAIL } from '../actions';
const initialState = {
	gifURL: '',
  error: '',
  isFetching: false
};

function reducer1(state = initialState, action) {
	switch (action.type) {

    case GET_URL_START:
      return { ...state, isFetching: true };

		case GET_URL_SUCCESS:
			return { ...state, gifURL: action.payload, isFetching: false };

		case GET_URL_FAIL:
			return { ...state, error: action.payload, isFetching: false };

		default:
			return state;
	}
}

export default reducer1
