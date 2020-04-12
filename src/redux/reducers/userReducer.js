let init = {
    'name': '张三',
    'sex': '女'
}
export default (state=init,action)=>{
  switch(action.type) {
    case 'name':
        state.name = action.payload
        return {...state}
    case 'sex':
        state.sex= action.payload
        return {...state}
    // 在没有匹配的情况下一定要返回旧的state
    default:
        return state
  }
}