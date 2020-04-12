import React from 'react'
import './index.scss'
class ItemList extends React.Component{
  constructor(props, context) {
    super(props)
    let items = props.lists
    console.log(items)
    let list = items.map((item, index) =>
      <div className="item" key={index}>
        <div className="item-good">
          <GoodList goods={item.goods} index={index} updateParent={props.updateParent} updateItem={this.updateItem.bind(this)}/>
        </div>
      </div>
    )
    this.state = {
      list
    }
  }
  updateItem(params) {
    console.log(params)
    
//  let items = JSON.parse(JSON.stringify(PropsValue.lists))
//  console.log(items)
//  items[params.index].goods[params.gindex].selected = !params.selected
  }
  render() {
    return (
      this.state.list
    )
  }
}
class GoodList extends React.Component{
  constructor(props, context) {
    super(props)
    let goods = props.goods
    this.state = {
      goods
    }
    let list = this.state.goods.map((item, index) => {
      return (
        <Good item={item} index={index} key={index}/>
//      <div className="good" key={index}>
//        <div className="good-left">
//          <span className={['icon-select', item.selected ? 'act' : ''].join(' ')} onClick={(ev) => {this.select2(ev, item, index, props)}}></span>
//          <img src="http://img.alicdn.com/imgextra/i3/1614112418/O1CN01fmdBm71TjUBQjY9y8_!!0-item_pic.jpg_640x640q80_.webp" alt="" />
//        </div>
//        <div className="good-right">
//          right
//        </div>
//      </div>
      )
    })
    this.state = {
      ...this.state,
      list
    }
  }
  select2(e, good, gindex, props) {
    props.updateItem({
      ss: 10
    })
    let goods = JSON.parse(JSON.stringify(this.state.goods))
    goods[gindex].selected = !good.selected
    this.setState({
      goods
    })
    /* this.setState((prevState) => {
      let temp = {
        ...prevState,
        goods: [...prevState.goods]
      }
      temp.goods[gindex].selected = !good.selected
      return {...temp}
    }) */
    console.log(this.state)
  }
  // this.select(ev, item, index, props)
  // list[index].selected = !item.selected
  select(e, good, gindex, props) {
    props.updateParent({
      lists: [
        {
          icon: '',
          shopname: '阿达啊as12',
          goods: [{ price: 12.22, count: 1 }, { price: 12.22, count: 1 }]
        },
        {
          icon: '',
          shopname: 'dfgdg大幅度发的',
          goods: [{ price: 238, count: 1 }, { price: 238, count: 2 }, { price: 238, count: 3 }, { price: 238, count: 4 }, { price: 238, count: 5 }, { price: 238, count: 1 }, { price: 238, count: 2 }, { price: 238, count: 3 }, { price: 238, count: 4 }, { price: 238, count: 5 }]
        }
      ]
    })
    props.updateItem({
      index: props.index,
      gindex,
      selected: good.selected
    })
  }
  render() {
    console.log('good render')
    return (
      this.state.list
    )
  }
}
class Good extends React.Component{
  constructor(props, context) {
    super(props)
    let item = props.item
    this.state = {
      selected: item.selected
    }
  }
  select(selected) {
    this.setState({
      selected
    })
  }
  render() {
    return (
      <div className="good">
        <div className="good-left">
          <span className={['icon-select', this.state.selected ? 'act' : ''].join(' ')} onClick={(ev) => {this.select(!this.state.selected)}}></span>
          <img src="http://img.alicdn.com/imgextra/i3/1614112418/O1CN01fmdBm71TjUBQjY9y8_!!0-item_pic.jpg_640x640q80_.webp" alt="" />
        </div>
        <div className="good-right">
          right
        </div>
      </div>
    )
  }
}
export default class ShopCar extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      title: '安达市多',
      lists: [
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
    }
  }
  updateParent(obj) {
    /* console.log(234, obj)
    this.setState({
      lists: []
    }) */
    /* this.setState((prevState, props) => ({
      lists: []
    })) */
    this.setState((prevState) => {
      let temp = {
        ...prevState,
        lists: [...prevState.lists]
      }
      temp.lists[0].goods = [{ price: 12.22, count: 1 }, { price: 12.22, count: 1 }]
      return temp
    })
    console.log(this.state)
    this.setState({ title: 'asff' })
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  render() {
    console.log(666)
    return (
      <div>
        <p>{this.state.title}</p>
        <div className="page-shopcar">
          <ItemList lists={this.state.lists} updateParent={this.updateParent.bind(this)}/>
        </div>
        <div></div>
      </div>
    )
  }
}
