import React from 'react'
import GoodList from './goodlist.js'
export default class ShopList extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      list: ''
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    let shops = nextProps.list
    let list = shops.map((item, index) =>
      <div className="item" key={index}>
        <div className="item-good">
          <GoodList goods={item.goods} index={index}/>
        </div>
      </div>
    )
    this.setState({
      list
    })
  }
  render() {
    return (
      this.state.list
    )
  }
}
