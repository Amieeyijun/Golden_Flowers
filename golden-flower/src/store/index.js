import { createStore } from "redux";
// 引入管理数据的文件
import reducers from './reducers'
// 创建一个管理员
const store = createStore(reducers)
export default store;