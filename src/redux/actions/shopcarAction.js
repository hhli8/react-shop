export const setList = (list) =>{
  return {
    type: 'list',
    payload: list
  }
}
export const setCount = (obj) =>(dispatch)=>{
  dispatch({
    type: 'setlist',
    obj
  })
}
export const setSelect = (obj) =>(dispatch)=>{
  dispatch({
    type: 'setSelect',
    obj
  })
}