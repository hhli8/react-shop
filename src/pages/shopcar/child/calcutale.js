import React from 'react'
import {connect} from 'react-redux'
import NP from 'number-precision'
class Calcutale extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      isAllSelected: false,
      totalPrice: 0,
      totalCount: 0
    }
  }
  componentDidMount() {
    React.$emitter.addListener('calculateShopcar', (msg) => {
      this.calculate()
    })
  }
  componentWillUnmount() {
    React.$emitter.removeListener('calculateShopcar', (msg) => {})
  }
  render() {
    return (
      <div className="clearing">
        <span className={['icon-select', this.state.isAllSelected ? 'act' : ''].join(' ')} onClick={(ev) => {this.selectAll()}}></span>
        <div className="clear">
          <span className="font-tag">不含运费</span><span className="total-text">合计：</span><span className="total-cash">¥{this.state.totalPrice}</span><span className="btn">结算<i style={{display: this.state.totalCount?'':'none'}}>({this.state.totalCount})</i></span>
        </div>
      </div>
    )
  }
  selectAll() {
    let is = !this.state.isAllSelected
    React.$emitter.emit('selectAll', is)
    let list = this.props.list
    let totalPrice = 0
    let totalCount = 0
    list.forEach((item) => {
      item.goods.forEach((good) => {
        if (is) {
          totalCount++
          totalPrice += good.price * good.count
        }
      })
    })
    this.setState({
      isAllSelected: is,
      totalCount,
      totalPrice: NP.strip(totalPrice)
    })
  }
  calculate() {
    let totalTag = 0
    let totalPrice = 0
    let totalCount = 0
    let list = this.props.list
    list.forEach((item) => {
      item.goods.forEach((good) => {
        totalTag++
        if (good.selected) {
          totalPrice += good.price * good.count
          totalCount++
        }
      })
    })
    this.setState({
      isAllSelected: totalTag === totalCount,
      totalCount,
      totalPrice: NP.strip(totalPrice)
    })
  }
}
const mapStateToProps = state => ({
  list: state.shopcar.list
})

const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Calcutale)