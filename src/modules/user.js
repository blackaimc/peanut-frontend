import {createAction, handleActions} from 'redux-actions';
import {takeLateset} from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK',
);

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
export function* userSaga(){
    yield takeLateset(CHECK, checkSaga);
}

const initalState = {
    user : null,
    checkError : null,
}

export default handleActions(
    {
        [TEMP_SET_USER] : (state, {payload : user}) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS] : (state, {payload : user})
    },
    initalState
)