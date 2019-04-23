
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_STYLE_VALUE, INIT_LIST, GET_INIT_LIST } from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const getDelectItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const getstyleChangeAction = (style) => ({
    type: CHANGE_STYLE_VALUE,
    style
})

export const initListAction = (data) => ({
    type: INIT_LIST,
    data
})

export const getInitList = (data) => ({
    type: GET_INIT_LIST,
    data
})