import React from 'react'
import './nav.scss'
import { withRouter } from 'react-router-dom'

class Nav extends React.Component{
  constructor(props, context) {
    super(props)
    this.slot = props.children
    let defaultIndex = this.props.index || 0
    let nav = [
      { name: '首页', icon: '&#xe621;', linkname: '' },
      { name: '分类', icon: '&#xe61e;', linkname: 'classify' },
      { name: '购物车', icon: '&#xe602;', linkname: 'shopcar' },
      { name: '我的', icon: '&#xe7ae;', linkname: 'mine' }
    ]
    let list = nav.map((item, index) => {
      return (
        <div key={index} className={['item', defaultIndex === index ? 'act' : ''].join(' ')} onClick={() => {this.jump(item)}}>
          <span className="iconfont" dangerouslySetInnerHTML={{ __html: item.icon }}></span>
          <div className="name">{item.name}</div>
        </div>
      )
    })
    this.state = {
      list
    }
  }
  jump(item) {
    this.props.history.push({
      pathname: item.linkname
    })
  }
  render() {
    return (
      <div className="tabBar-wrap">
        {this.slot}
        <nav>{this.state.list}</nav>
      </div>
    )
  }
}
 export default withRouter(Nav)