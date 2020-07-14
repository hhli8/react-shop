import React from 'react'
// import Good from './good.js'
import PropTypes from 'prop-types'
export default class son extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      data: props.list
    }
    console.log(context, '-------son')
  }
  UNSAFE_componentWillReceiveProps(nextProps) { // componentWillReceiveProps 名称替换
    console.log(nextProps)
  }
  sonClick = () => {
    this.props.callback('这是son 给父传的字符串')
  }
  static contextTypes = {
    propA: PropTypes.string,
    methodA: PropTypes.func
  }
  /* sonClick() {
    this.props.callback('这是son 给父传的字符串') // 该写法报错this指向问题 //this.sonClick = this.sonClick.bind(this)
  } */
  render() {
    const {
      propA,
      methodA
    } = this.context
    console.log(`context.propA = ${propA}`)  // context.propA = propA
    var x = methodA()
    console.log(x)
    console.log(`context.methodA = ${methodA}`)  // context.methodA = undefined
    return (
      <div onClick={this.sonClick}>son1  ---  {this.state.data.x}</div>
    )
  }
}
