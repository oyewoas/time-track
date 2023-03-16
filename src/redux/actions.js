export const FETCH_WORKERS_REQUEST = 'FETCH_WORKERS_REQUEST';
export const FETCH_WORKERS_SUCCESS = 'FETCH_WORKERS_SUCCESS';
export const FETCH_WORKERS_FAILURE = 'FETCH_WORKERS_FAILURE';

export const fetchWorkersRequest = () => ({
  type: FETCH_WORKERS_REQUEST
});

export const fetchWorkersSuccess = (workers) => ({
  type: FETCH_WORKERS_SUCCESS,
  payload: workers
});

export const fetchWorkersFailure = (error) => ({
  type: FETCH_WORKERS_FAILURE,
  payload: error
});
