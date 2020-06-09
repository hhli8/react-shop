/*
 * 正在上映的电影
 */
import React from 'react'
import './monline.scss'
import { withRouter } from 'react-router-dom'

class Monline extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {}
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      movie: nextProps.movie
    })
    let m = nextProps.movie
    let list = m.map((item, index) => {
      return (
        <div key={index} className="item"  onClick={() => {this.jump(item)}}>
          <img alt={item.alt} src="http://img.alicdn.com/imgextra/i3/1614112418/O1CN01fmdBm71TjUBQjY9y8_!!0-item_pic.jpg_640x640q80_.webp" />
          <div className="title">{item.rating.average} {item.title}</div>
          <p className="tag">{this.genres(item.genres)}</p>
        </div>
      )
    })
    this.setState({
      list
    })
  }
  
  genres(g) {
    return g.map((item) => {
      return (
        <span key={item}>{item}</span>
      )
    })
  }
  
  jump(item) {
    console.log(item)
    this.props.history.push({
      pathname: 'movie-detail'
    })
  }
  
  render() {
    return (
      <div className="p-mine-movie">
        <div className="scroll">{this.state.list}</div>
      </div>
    )
  }
}

export default withRouter(Monline)
