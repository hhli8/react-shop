import React from 'react'
export default class Login extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      date: new Date(),
      text: 'asdasdasdsadd'
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState) // https://www.jianshu.com/p/b331d0e4b398
    return true
  }
  onHandle() {
    console.log('asdasdad889')
  }
  render() {
    console.log(9999)
    return (
      <div>
        home
        <p onClick={onHandle}>{this.state.text}</p>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
function onHandle () {
  console.log('asdasdad88')
}
