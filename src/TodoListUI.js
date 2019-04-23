import React from 'react';
import { Input, Button, List, Tooltip } from 'antd';

//此处是无状态组件，适用于UI组件只有一个render函数的时候使用。优势是：性能更高
const TodoListUI = (props) => {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <div>
                <Input
                    placeholder="todo info"
                    style={{ width: '300px', marginRight: '10px' }}
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                />
                <Button
                    type="primary"
                    onClick={props.handleBtnClick}
                    onKeyPress={props.handleEnterKey}
                >提交</Button>
                <Tooltip >
                    <Button
                        style={{ marginLeft: '10px', fontWeight: '800' }}
                        onClick={() => { props.handleChangeStyleClick('blod') }}>加粗</Button>
                </Tooltip>
            </div>

            <List
                style={{ marginTop: '10px', width: '450px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => {
                    console.log("当前新加入的事第几个：", props.changeIndex);
                    if (props.changeIndex.indexOf(index) !== -1) {
                        console.log("要加粗了！！！：", index);
                        return (
                            <List.Item
                                onClick={() => { props.handleDeleteClick(index) }}
                            > {React.createElement('span', { style: props.style }, item)}
                            </List.Item>
                        )
                    } else {
                        return (
                            <List.Item onClick={() => { props.handleDeleteClick(index) }}>{item}</List.Item>
                        )
                    }

                }}
            />
        </div >
    )
}

export default TodoListUI;