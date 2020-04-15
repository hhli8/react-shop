import React from 'react'
import './count.scss'
import { Toast } from 'antd-mobile'
import {connect} from 'react-redux'
import { setCount } from '@/redux/actions/shopcarAction.js'
class Count extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      price: props.price,
      count: props.count
    }
  }
  render() {
    return (
      <div className="count">
        <span className="price"><span className="unit">¥</span>&nbsp;{this.state.price}</span>
        <div className="operate">
          <span className="iconfont" onClick={(ev) =>{this.minus(ev,this.state.count)}}>&#xe620;</span><span className="value">{this.state.count}</span><span className="iconfont" onClick={(ev) =>{this.add(ev,this.state.count)}}>&#xe632;</span>
        </div>
      </div>
    )
  }
  minus(ev, count) {
    if (count === 1) return
    let lastCount = --count
    this.setState({ count: lastCount })
    this.setCount(lastCount)
  }
  add(ev, count) {
    if (count === 5) {
      Toast.info('商品最大数量为5')
      return
    }
    let lastCount = ++count
    this.setState({ count: lastCount })
    this.setCount(lastCount)
  }
  setCount(lastCount) {
    let sindex = this.props.sindex
    let gindex = this.props.gindex
    this.props.setCount({
      count: lastCount,
      sindex,
      gindex
    })
    React.$emitter.emit('calculateShopcar', 1)
  }
}

const mapStateToProps = state => ({
  list: state
})
const actionCreators = { setCount }
export default connect(mapStateToProps, actionCreators)(Count)