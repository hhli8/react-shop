import {combineReducers} from 'redux'
// import systemReducer from './systemReducer'
import userReducer from './userReducer'

// 包含所有的计算函数
export default combineReducers({
    // system: systemReducer,
    user: userReducer
})