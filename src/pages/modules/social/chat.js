import React from 'react'
import './chat.scss'
import io from 'socket.io-client'

let socket = null
socket = io('http://172.32.30.167:3001')
socket.on('rev_msg', (data) => {
  console.log(data, '我接收到信息啦')
})

export default class Nav extends React.Component {
  
  componentDidMount() {
    sessionStorage.setItem('RSID', JSON.stringify({
      name: 'Lee', id: 456
    }))
    let RSID = JSON.parse(sessionStorage.getItem('RSID'))
    let visitor = this.props.history.location.state.id
    socket.emit('open_chat', {
      name: RSID.name,
      form: RSID.id,
      to: visitor
    })
  }
  
  state = {
    targetId: 20,
    message: []
  }
  
  sendMsg () {
    const valueTemp = this.inputValue.value
    // console.log(valueTemp)
    let visitor = this.props.history.location.state.id
    let RSID = JSON.parse(sessionStorage.getItem('RSID'))
    socket.emit('chat_msg', {
      name: RSID.name,
      form: RSID.id,
      to: visitor,
      msg: valueTemp
    })
    this.inputValue.value = ''
  }
  
  render () {
    return (
      <div className="p-chat flex">
        <div className="c-top">Alice的橘猫{this.state.targetId}</div>
        <div className="c-scroll">
          start66666adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>6adsdasdasdadad<br/>end
        </div>
        <div className="c-bottom flex">
          <textarea className="flex1" ref={input => this.inputValue = input}></textarea><span className="btn" onClick={() => {this.sendMsg()}}>发送</span>
        </div>
      </div>
    )
  }
}
