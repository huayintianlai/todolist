import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

//generator函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

function* getInitList() {
    try {
        const res = yield axios.get('http://reactlearn.cn');
        console.log("获取到的数据", res.data);
        const action = initListAction(res.data);
        console.log("action", action);
        yield put(action);
    } catch (e) {
        console.log("网络请求失败:", e.message);
    }
}



export default mySaga;