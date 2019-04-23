import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_STYLE_VALUE, INIT_LIST } from './actionTypes'

const defaultState = {
    inputValue: "",
    list: [],
    style: {},
    changeIndex: []
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case DELETE_TODO_ITEM:
            newState.list.splice(action.index, 1);
            //TODO：这里有问题
            newState.changeIndex = newState.changeIndex.map((item) => {
                return --item
            });
            return newState;
        case CHANGE_STYLE_VALUE:
            const changeIndex = Object.keys(newState.list).length
            newState.style = action.style;
            newState.changeIndex.push(changeIndex);
            return newState;
        case INIT_LIST:
            newState.list = action.data;
            return newState;
        default:
            return state;
    }
}