let init = {
  weather: {}
}
export default (state=init,action)=>{
  /* switch(action.type) {
    case 'weather':
      state.weather = action.payload
      return {...state}
    case 'monline':
      state.monline = action.payload
      return {...state}
    default:
      return state
  } */
  state[action.type] = action.payload
  return {...state}
}