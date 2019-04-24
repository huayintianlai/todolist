import React from 'react';
import { connect } from 'react-redux';
import { addTodoItemAction, delTodoItemAction, changeInputValueAction } from './store/actionCreators'
const TodoList = (props) => {
    const { inputValue, list, changeInputValue, handleCommitClick, deleteItem } = props;
    return (
        <div>
            <input value={inputValue} onChange={changeInputValue}></input>
            <button onClick={handleCommitClick}>提交</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={() => { deleteItem(index) }} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

// document.addEventListener('keypress', handleEnterKey());
// //判断点击的键盘的keyCode是否为13，是就调用上面的搜索函数
// function handleEnterKey(e) {
//     if (e.keyCode === 13) { //主要区别就是这里，可以直接获取到keyCode的值
//         this.handleCommitClick()
//     }
// }

const mapStateToProps = (state) => {
    console.log("state:", state);
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue: (e) => {
            const action = changeInputValueAction(e.target.value);
            dispatch(action);
        },
        handleCommitClick() {
            const action = addTodoItemAction();
            dispatch(action);
        },
        deleteItem(e) {
            console.log("节点信息：", e);
            const action = delTodoItemAction(e);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);