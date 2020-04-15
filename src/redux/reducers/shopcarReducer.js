let init = {
  list: []
}
export default (state=init,action)=>{
  let obj
  switch(action.type) {
    case 'list':
      state.list = action.payload
      return {...state}
    case 'setlist':
      obj = action.obj
      state.list[obj.sindex].goods[obj.gindex].count = obj.count
      return {...state}
    case 'setSelect':
      obj = action.obj
      state.list[obj.sindex].goods[obj.gindex].selected = obj.selected
      return {...state}
    default:
      return state
  }
}