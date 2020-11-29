import {createAction, handleActions} from 'redux-actions';

const INITALIZE = 'write/INITALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

export const initalize = createAction(INITALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({
    key,
    value,
}));

const initalState = {
    title : '',
    body : '',
    tags: [],
}

const write = handleActions(
    {
        [INITALIZE] : state => initalState,
        [CHANGE_FIELD] : (state, {payload : {key, value}}) => ({
            ...state,
            [key] : value
        }),
    },
    initalState,
);

export default write;