import React, { Component } from 'react';
import "antd/dist/antd.css";
import store from './store'
import TodoListUI from './TodoListUI';
import { getInputChangeAction, getAddItemAction, getDelectItemAction, getstyleChangeAction } from './store/actionCreators';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChangeStyleClick = this.handleChangeStyleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);

    store.subscribe(this.handleStoreChange);
  }

  render() {
    return <TodoListUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      style={this.state.style}
      changeIndex={this.state.changeIndex}
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      handleChangeStyleClick={this.handleChangeStyleClick}
      handleDeleteClick={this.handleDeleteClick}
    />;
  }

  componentDidMount() {
    //组件挂载时候，注册keypress事件
    document.addEventListener('keypress', this.handleEnterKey);
    
  }

  //判断点击的键盘的keyCode是否为13，是就调用上面的搜索函数
  handleEnterKey = (e) => {
    if (e.keyCode === 13) { //主要区别就是这里，可以直接获取到keyCode的值
      this.handleBtnClick()
    }
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    if (this.state.inputValue === "") return;
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleChangeStyleClick(key) {
    console.log("style-key:", key);
    let style = {};
    if (key === "blod") {
      style.fontWeight = 800
    }
    const action = getstyleChangeAction(style)
    store.dispatch(action)
  }

  handleDeleteClick(index) {
    const action = getDelectItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
