import React from 'react'
import './person.scss'
import io from 'socket.io-client'

let socket = null
socket = io('http://172.32.30.167:3001')
socket.on('chat message', (data) => {
  console.log(data, '我接收到信息啦')
});
// sessionStorage.setItem('RSID', parseInt(Math.random() * 120))
// 22 93 50

let id
let downloadFile = (url) => {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none"; // 防止影响页面
  iframe.style.height = 0; // 防止影响页面
  iframe.src = url; 
  document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
  // 5分钟之后删除（onload方法对于下载链接不起作用，就先抠脚一下吧）
  setTimeout(()=>{
    iframe.remove();
  }, 5 * 60 * 1000);
}

export default class Nav extends React.Component {
  jump3 (value) {
    id = value
  }
  
  jump () {
    // let socket = require('socket.io-client')('http://172.32.30.167:3001') // 指定连接地址
    socket.emit('add user', {
      name: 'asd',
      id
    });
  }
  
  sendmsg () {
    socket.emit('add user', {
      name: 'asd',
      form: sessionStorage.getItem('RSID'),
      to: id
    });
    socket.emit('chat message', {
      name: '阿斯达',
      form: sessionStorage.getItem('RSID'),
      to: id
    });
  }
  
  jump2 () {
    downloadFile('https://c51.in/r/V')
    downloadFile('https://c51.in/r/w')
  }
  
  render () {
    return (
      <div className="p-social-person">
        <div className="per-header">
          <img alt="" src="http://172.32.30.167:3001/reactshop/imgs/head/1592716677(1).jpg"/>
          <div className="per-header-des">白首不相离,巴拉巴拉按时大大大</div>
        </div>
        <button onClick={() => {this.jump3(22)}}>点我-22</button><br/><br/>
        <button onClick={() => {this.jump3(93)}}>点我-93</button><br/><br/>
        <button onClick={() => {this.jump3(50)}}>点我-50</button><br/><br/>
        <button onClick={() => {this.jump()}}>点我-建立连接添加好友</button><br/><br/>
        <button onClick={() => {this.sendmsg()}}>点我-私信</button><br/><br/>
        <button onClick={() => {this.jump2()}}>点我-下载</button>
      </div>
    )
  }
}
