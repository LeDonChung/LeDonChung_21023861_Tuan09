import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TODOS, UPDATE_TODOS } from './actions';

const API_URL = 'https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos'; // Replace with your API

function* fetchTodos() {
    try {
        const response = yield call(axios.get, API_URL + '?completed=false');
        yield put({ type: 'SET_TODOS', payload: response.data });
    } catch (error) {
        console.error(error);
    }
}


export default function* todoSagas() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
}