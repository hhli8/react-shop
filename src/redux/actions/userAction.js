export const nameAction = (name) =>{
  return {
      type: 'name',
      payload: name
  }
}

export const sexAction = () =>(dispatch)=>{
  setTimeout(()=>{
    dispatch({
        type: 'sex',
        payload: '男'
    })
  },2000)
}