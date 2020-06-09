export const setWeather = (data) =>{
  return {
    type: 'weather',
    payload: data
  }
}

export const setOnlineMovie = (data) =>{
  return {
    type: 'monline',
    payload: data
  }
}
