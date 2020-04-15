import React from 'react'
import Good from './good.js'
export default class GoodList extends React.Component{
  constructor(props, context) {
    super(props)
    let goods = props.goods
    let list = goods.map((item, index) =>{
      return (
        <Good item={item} sindex={props.index} gindex={index} key={index}/>
      )
    })
    this.state = {
      list
    }
  }
  render() {
    return (
      this.state.list
    )
  }
}
