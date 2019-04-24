import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, } from './actionTypes';

export const addTodoItemAction = () => ({
    type: ADD_ITEM,
})

export const delTodoItemAction = (key) => ({
    type: DELETE_ITEM,
    key
})

export const changeInputValueAction = (data) => ({
    type: CHANGE_INPUT_VALUE,
    data
})