import React from 'react'
export default class Good extends React.Component{
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