import React from 'react'
import './index.scss'
import ShopList from './child/shoplist.js'
import Nav from '@/components/nav'
import Calcutale from './child/calcutale.js'
import { connect } from 'react-redux'
import { setList } from '@/redux/actions/shopcarAction.js'
class ShopCar extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      shops: []
    }
  }
  componentDidMount() {
    setTimeout(() => {
      let shops = [
        {
          icon: '',
          shopname: '阿达啊as12',
          goods: [{ price: 12.22, count: 1 }]
        },
        {
          icon: '',
          shopname: 'dfgdg大幅度发的',
          goods: [{ price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }]
        }
      ]
//    this.setState({
//      shops
//    })
      this.props.setList(shops)
    })
  }
  render() {
    return (
      <div className="page-scroll-bottom page-shopcar-f">
        <div className="page-shopcar">
          <ShopList list={this.props.shopcar.list}/>
        </div>
        <Nav index={2}>
          <Calcutale/>
        </Nav>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  shopcar: state.shopcar
})

const actionCreators = { setList }
export default connect(mapStateToProps, actionCreators)(ShopCar)