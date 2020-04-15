import React from 'react'
import Count from '@/pages/shopcar/components/count.js'
import {connect} from 'react-redux'
import { setSelect } from '@/redux/actions/shopcarAction.js'
class Good extends React.Component{
  constructor(props, context) {
    super(props)
    let item = props.item
    this.state = {
      selected: item.selected,
      price: item.price,
      count: item.count
    }
  }
  select(selected) {
    // 修改上级数据
    this.props.setSelect({
      sindex: this.props.sindex,
      gindex: this.props.gindex,
      selected
    })
    this.setState({
      selected
    })
    React.$emitter.emit('calculateShopcar', 1)
  }
  componentDidMount() {
    React.$emitter.addListener('selectAll', (msg) => {
      this.select(msg)
    })
  }
  componentWillUnmount() {
    React.$emitter.removeListener('selectAll', (msg) => {})
  }
  render() {
    return (
      <div className="good">
        <div className="good-left">
          <span className={['icon-select', this.state.selected ? 'act' : ''].join(' ')} onClick={(ev) => {this.select(!this.state.selected)}}></span>
          <img src="http://img.alicdn.com/imgextra/i3/1614112418/O1CN01fmdBm71TjUBQjY9y8_!!0-item_pic.jpg_640x640q80_.webp" alt="" />
        </div>
        <div className="good-right">
          <div className="title text-line2">撒大声地敖德萨多自行车这次行程中啊飒飒大爱上大沙发上阿斯蒂芬发给奥术大师大111</div>
          <div className="params">蓝色;XL</div>
          <Count price={this.state.price} count={this.state.count} sindex={this.props.sindex} gindex={this.props.gindex}/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  //
})
const actionCreators = { setSelect }
export default connect(mapStateToProps, actionCreators)(Good)