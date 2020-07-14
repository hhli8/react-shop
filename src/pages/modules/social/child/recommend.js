import React from 'react'
import './recommend.scss'
import { withRouter } from 'react-router-dom'

class S extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        data: [
          { name: 'dakllk', id: 1 },
          { name: '阿斯达', id: 12 },
          { name: 'kkifl', id: 13 },
          { name: '非法建行卡', id: 14 },
          { name: '漂漂亮亮', id: 15 }
        ]
      })
    }, 200)
  }
  
  jump () {
    this.props.history.push({
      pathname: 'friendsDetail'
    })
  }
  
  render () {
    return (
      <>
        <p className="c-recommend-title">今日推荐匹配Top5</p>
        <div className="c-recommend">
          {
            this.state.data.map((item) => (
              <div className="item flex align-items-center" key={item.id} onClick={() => {this.jump()}}>
                <div className="item-header"><img alt="" src="http://172.32.30.167:3001/reactshop/imgs/head/1592716491(1).jpg" /></div>
                <div className="item-params">
                  <div className="nick">
                    <span className="nickname">Alice的橘猫</span><span className="iconfont sex">&#xe606;</span>
                  </div>
                  <div className="job">教师&nbsp;&nbsp;165cm</div>
                  <div className="describe">愿得伊人心,白首不相离</div>
                </div>
              </div>
            ))
          }
        </div>
      </>
    )
  }
}

export default withRouter(S)
