import React from 'react'
import PropTypes from 'prop-types'

export default class Login extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      date: new Date(),
      text: 'asdasdasdsadd',
      sondata: { x: 234 }
    }
    console.log(context, '-----f')
  }
  
  
  static childContextTypes = {
    propA: PropTypes.string,
    methodA: PropTypes.func
  }
  getChildContext () {
    return {
      propA: 'propA',
      methodA: () => 'methodA'
    }
  }
  
  UNSAFE_componentWillMount() { // componentWillMount 替换
    console.log('componentWillMount')
  }
  componentDidMount() {
    /* console.log('componentDidMount')
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000) */
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState) // https://www.jianshu.com/p/b331d0e4b398
    return true
  }
  UNSAFE_componentWillUpdate(nextProps,nextState) { // componentWillUpdate 替换
    console.log('componentWillUpdate')
  }
  componentDidUpdate(prevProps,prevState) {
    console.log('componentDidUpdate')
  }
  onHandle() {
    console.log('asdasdad889')
  }
  callback(msg) {
    console.log(msg)
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
