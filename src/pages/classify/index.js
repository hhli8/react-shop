import React, { useState } from 'react'
import Navbar from './child/nav.js'
// import Message from './child/message.js'
/* export default class Login extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      //
    }
  }
  render() {
    return (
      <div>
        classify
      </div>
    )
  }
} */
//const Navbar = () => {
//const { username } = useContext(AppContext);
//return (
//  <div className="navbar">
//    <p>AwesomeSite</p>
//    <p>{username}</p>
//  </div>
//);
//}
const AppContext = React.createContext({});
export default function Button() {
  const [buttonText, setButtonText] =  useState("Click me,   please");

  function handleClick() {
    return setButtonText("Thanks, been clicked!");
  }

  return (
    <AppContext.Provider value={{ username: 'superawesome'}}>
      <div>
        <button  onClick={handleClick}>{buttonText}</button>
        <Navbar/>
      </div>
    </AppContext.Provider>
  )
}
