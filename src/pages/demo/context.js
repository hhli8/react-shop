import React from 'react'

const ThemeContext = React.createContext('light')

export default class demoContext extends React.Component {
  constructor (props, context) {
    super(props)
  }
  
  render () {
    return (
      <>
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      </>
    )
  }
}

function Toolbar () {
  return (
    <ThemedButton />
  )
}

/* function ThemedButton2 () {
  return (
    <>6</>
  )
} */
class ThemedButton extends React.Component {
  // static contextType = ThemeContext // 或者如下使用
  
  componentDidMount () {
    // console.log(this.context) // dark---value
  }
  
  render () {
    return (
      <>
        <p>this is context</p>
        <button>{this.context}</button>
        <div>demoContext的value => Toolbar => ThemedButton</div>
      </>
    )
  }
}
ThemedButton.contextType = ThemeContext
