import { all } from 'redux-saga/effects'
import todoSagas from './todos/saga'

export default function* rootSaga() {
    yield all([
        todoSagas()
    ])
} 