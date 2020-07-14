import React from 'react'
import './list.scss'
import './recommend.scss'
import { ListView } from 'antd-mobile'
import $api from '@/utils/fetch.js'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'

let initPage = 1
function getList (pageNum = 1) {
  let list = $api('/react/travel/getTravelList', {
    pageNum,
    pageSize: 10
  }, 'post')
  initPage++
  return list
}

class List extends React.Component {
  constructor (props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
    this.state = {
      data: [],
      refreshing: false,
      height: document.documentElement.clientHeight,
      dataSource,
      isLoading: false,
      useBodyScroll: true
    }
  }
  
  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
  
  async componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop
    this.rData = await getList()
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      height: hei
    })
  }
  
  async onEndReached () {
    this.setState({ isLoading: true })
    this.rData = [ ...this.rData, ...(await getList(initPage)) ]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      isLoading: false,
    })
  }
  
  jump () {
    this.props.history.push({
      pathname: 'friendsDetail'
    })
  }
  
  render () {
    const row = (item, sectionID, rowID) => {
      // console.log(item, '|' + sectionID + '|', rowID)
      return (
        <div className="item flex align-items-center" key={item.id} onClick={() => {this.jump()}}>
          <div className="item-header"><img alt="" src="http://172.32.30.167:3001/reactshop/imgs/head/1592716826(1).jpg" /></div>
          <div className="item-params">
            <div className="nick">
              <span className="nickname">Alice的橘猫{item.id}</span><span className="iconfont sex">&#xe606;</span>
            </div>
            <div className="job">教师&nbsp;&nbsp;165cm</div>
            <div className="describe">愿得伊人心,白首不相离</div>
          </div>
        </div>
      )
    }
    
    return (
      <>
        <p className="c-social-list-title">猜你喜欢</p>
        <ListView
          className="c-recommend"
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderRow={row}
          useBodyScroll={this.state.useBodyScroll}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : ''}
          </div>)}
          style={this.state.useBodyScroll ? {} : {
            height: this.state.height
          }}
          onEndReached={() => {this.onEndReached()}}
        />
      </>
    )
  }
}

export default withRouter(List)
