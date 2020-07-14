import React from 'react'
import './index.scss'

export default class Nav extends React.Component {
  scrollTopShow = false
  
  componentDidMount () {
    // let scroll = el | window
    // scroll.scrollTop | document.body.scrollTop || document.documentElement.scrollTop
    let h = document.documentElement.clientHeight || document.body.clientHeight
    window.addEventListener('scroll', (e) => {
      // console.log(1)
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (scrollTop > h) {
        this.scrollTopShow = true
        this.forceUpdate()
      } else {
        this.scrollTopShow = false
        this.forceUpdate()
      }
    })
  }
  
  top () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  
  render () {
    return (
      <div
        className={['c-scrolltop', this.scrollTopShow?'':'none'].join(' ')}
        onClick={() => {this.top()}}>
        top
      </div>
    )
  }
  
}
