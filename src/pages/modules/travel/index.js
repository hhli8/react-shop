import React from 'react'
import './index.scss'
import { PullToRefresh, ListView } from 'antd-mobile'
import ReactDOM from 'react-dom'
import $api from '@/utils/fetch.js'
import ScrollTop from '@/components/scrollTop'

let initPage = 1
function getList (pageNum = 1) {
  let list = $api('/react/travel/getTravelList', {
    pageNum,
    pageSize: 10
  }, 'post')
  initPage++
  return list
}

export default class Nav extends React.Component {
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
  
  onRefresh = async () => {
    this.setState({ refreshing: true, isLoading: true })
    initPage = 1
    this.rData = await getList()
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      })
    }, 500)
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
    window.open('https://www.yidianzixun.com/article/0Pc6Q1wJ')
    /* this.props.history.push({
      pathname: 'travelDetail'
    }) */
  }
  
  render () {
    const row = (item, sectionID, rowID) => {
      // console.log(item, '|' + sectionID + '|', rowID)
      return (
        <div className="item" key={item.id} onClick={() => {this.jump(item)}}>
          <p className="item-title text-line2">{item.title}</p>
          <div className={item.imgs.length === 3?'item-img-3 flex flex-between':'item-img-1'}>
            {
              item.imgs.length === 3 ?
              item.imgs.map((img,index) => (
                <img src={img} alt="" key={index}/>
              ))
              :
              (<img src={item.imgs[0]} alt=""/>)
            }
          </div>
        </div>
      )
    }
    
    return (
      <div className="p-travel">
        <ListView
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
          pullToRefresh={<PullToRefresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            distanceToRefresh={50}
          />}
          onEndReached={() => {this.onEndReached()}}
        />
        <ScrollTop />
      </div>
    )
  }
}
