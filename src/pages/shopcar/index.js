import React from 'react'
import './index.scss'
import ShopList from './child/shoplist.js'
export default class ShopCar extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      shops: []
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        shops: [
          {
            icon: '',
            shopname: '阿达啊as12',
            goods: [{ price: 12.22, count: 1, selected: true }]
          },
          {
            icon: '',
            shopname: 'dfgdg大幅度发的',
            goods: [{ price: 238, count: 1 }, { price: 238, count: 2 }, { price: 238, count: 3 }, { price: 238, count: 4 }, { price: 238, count: 5 }, { price: 238, count: 1 }, { price: 238, count: 2 }, { price: 238, count: 3 }, { price: 238, count: 4 }, { price: 238, count: 5 }]
          }
        ]
      })
    })
  }
  render() {
    return (
      <div>
        <div className="page-shopcar">
          <ShopList list={this.state.shops}/>
        </div>
        <div></div>
      </div>
    )
  }
}