export const FETCH_TODOS = 'FETCH_TODOS';
export const UPDATE_TODOS = 'UPDATE_TODOS';

export const fetchTodos = () => ({ type: FETCH_TODOS });
export const updateTodos = (data) => ({ type: UPDATE_TODOS });

