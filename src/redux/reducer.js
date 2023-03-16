import { FETCH_WORKERS_REQUEST, FETCH_WORKERS_SUCCESS, FETCH_WORKERS_FAILURE } from './actions';

const initialState = {
  workers: [],
  isLoading: false,
  error: null
};

export const workersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_WORKERS_SUCCESS:
      return {
        ...state,
        workers: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_WORKERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
