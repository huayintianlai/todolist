const defaultValue = {
    inputValue: '',
    list: []
}

export default (state = defaultValue, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'change_input_value':
            newState.inputValue = action.data;
            return newState;
        case 'add_item':
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case 'delete_item':
            newState.list.splice(action.key, 1);
            return newState;
        default:
            return state;
    }
}