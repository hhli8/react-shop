import React from 'react'
import './tab.scss'
import { withRouter } from 'react-router-dom'

class h extends React.Component {
  state = {
    data: [
      { name: '旅行', icon: '&#xe9dd;', path: 'travel' },
      { name: '交友', icon: '&#xe61b;', path: 'friends' },
      { name: '美食', icon: '&#xe661;' },
      { name: '锻体', icon: '&#xe62c;' },
      { name: '购物', icon: '&#xe6a0;' },
      { name: '视频', icon: '&#xe634;' }
    ]
  }
  
  jump (item) {
    this.props.history.push({
      pathname: item.path
    })
  }

  render () {
    return (
      <div className="c-tabs flex flex-between">
        {
          this.state.data.map(item => (
            <div className="item flex1" key={item.icon} onClick={() => {this.jump(item)}}>
              <span className="iconfont" dangerouslySetInnerHTML={{ __html: item.icon }}></span>
              <div className="name">{item.name}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default withRouter(h)
