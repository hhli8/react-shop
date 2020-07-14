/*
 * static-nav/ lhh
 */
import React from 'react'
import './index.scss'
import { withRouter } from 'react-router-dom'

class Nav extends React.Component {
  constructor(props, context) {
    super(props)
    this.slot = props.children
    this.defaultIndex = props.index | 0
  }
  state = {
    data: [
      { name: '首页', icon: '&#xe621;', linkname: '' },
      { name: '分类', icon: '&#xe61e;', linkname: 'classify' },
      { name: '购物车', icon: '&#xe602;', linkname: 'shopcar' },
      { name: '我的', icon: '&#xe7ae;', linkname: 'mine' }
    ]
  }
  jump (item) {
    this.props.history.push({
      pathname: item.linkname
    })
  }
  render () {
    return (
      <div className="tabBar-wrap">
        {this.slot}
        <nav className="bottom-nav">
          {
            this.state.data.map((item, index) => (
              <div key={index} className={['item flex1', this.defaultIndex === index ? 'act' : ''].join(' ')} onClick={() => {this.jump(item)}}>
                <span className="iconfont" dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                <div className="name">{item.name}</div>
              </div>
            ))
          }
        </nav>
      </div>
    )
  }
}

export default withRouter(Nav)
