import {call, put} from 'redux-saga/effects';
import {startLoading, endLoading} from  '../modules/loading';

export default function createRequestSaga(type, request){
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
}