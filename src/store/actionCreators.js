
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_STYLE_VALUE } from './actionTypes'

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