import React from 'react'
import './person.scss'

/* let downloadFile = (url) => {
  const iframe = document.createElement("iframe");
  iframe.id = 'iframe'
  iframe.style.display = "none"; // 防止影响页面
  iframe.style.height = 0; // 防止影响页面
  iframe.src = url; 
  document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
  // 5分钟之后删除（onload方法对于下载链接不起作用，就先抠脚一下吧）
  setTimeout(()=>{
    iframe.remove();
  }, 5 * 60 * 1000);
}

let progressFunction = (e) => {
  var loading = Math.round(e.loaded / e.total * 100)
  console.log('loading::', loading)
} */

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      info: {
        job: '小学教师',
        height: '167cm',
        age: '28岁',
        earn: '20w'
      }
    }
  }
  
  openChat () {
    // sessionStorage.setItem('RSID', parseInt(Math.random() * 120))
    // 生成自己的id和对方的id-客服模式才可临时
    // 所以需要为固定
    let visitor = this.props.location.search
    visitor = visitor.split('=')[1]
    /*
    // sessionStorage.setItem('RSID', JSON.stringify({name:'Lee',id:128}))
    let RSID = JSON.parse(sessionStorage.getItem('RSID'))
    socket.emit('open_chat', {
      name: RSID.name,
      form: RSID.id,
      to: visitor
    }) */
    this.props.history.push({
      pathname: 'friendsChat',
      state: {
        id: visitor
      }
    })
  }
  
  /* openChat () {
    var form = new FormData()
    var xhr = new XMLHttpRequest()
    form.append('file', null)
    // xhr.onload = uploadComplete; // 添加 上传成功后的回调函数
    // xhr.onerror =  uploadFailed; // 添加 上传失败后的回调函数
    xhr.upload.onprogress = progressFunction // 添加 监听函数
    xhr.open('get', 'https://app.adjust.com/kdv27h2?campaign=cashkart&redirect=https%3A%2F%2Fgene-mengmai.oss-accelerate.aliyuncs.com%2Fcashgo%2Fcashso-cashkart.apk', true)
    xhr.send(form)
  } */
  
  render () {
    return (
      <div className="p-social-person">
        <div className="per-header">
          <img alt="" src="http://172.32.30.167:3001/reactshop/imgs/head/1592716677(1).jpg"/>
          <div className="per-header-des">白首不相离,巴拉巴拉按时大大大</div>
        </div>
        <div className="per-info">
          <div className="per-part-title">她来自</div>
          <div className="from">杭州&nbsp;余杭区, ****公司</div>
          <div className="flex info">
            <div className="flex1"><span className="iconfont">&#xe614;</span><div className="value">{this.state.info.job}</div></div>
            <div className="flex1"><span className="iconfont">&#xe7ca;</span><div className="value">{this.state.info.height}</div></div>
            <div className="flex1"><span className="iconfont">&#xe619;</span><div className="value">{this.state.info.age}</div></div>
            <div className="flex1"><span className="iconfont">&#xe629;</span><div className="value">{this.state.info.earn}</div></div>
          </div>
        </div>
        <div className="button-list">
          <div className="button" onClick={() => {this.openChat()}}>免费聊天</div>
        </div>
      </div>
    )
  }
}
