import React from 'react'
import './select.scss'

export default class S extends React.Component {
  constructor (props, context) {
    super(props)
    this.state = {
      mv: '',
      tg: '',
      width: 0,
      height: 0,
      distance: 0,
      dwidth: 0,
      dheight: 0
    }
  }
  
  opacity = 0
  
  componentDidMount () {
    let mv = this.refs.move.getBoundingClientRect()
    let tg = this.refs.target.getBoundingClientRect()
    // console.log(mv, tg, mv.top - tg.top)
    this.mv =mv
    this.tg = tg
    this.setState({
      width: mv.width,
      height: mv.height,
      distance: mv.top - tg.top,
      dwidth: mv.width - tg.width,
      dheight: mv.height - tg.height
    })
    window.addEventListener('scroll', this.scroll)
  }
  
  componentWillUnmount () {
    window.removeEventListener('scroll', this.scroll)
  }
  
  scroll = (e) => {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    let percent = scrollTop / this.state.distance
    // console.log(scrollTop, this.state.distance, percent)
    if (scrollTop >= this.state.distance) {
      this.opacity = 1
      this.forceUpdate()
    } else {
      this.opacity = percent
      this.forceUpdate()
      this.setState({
        width: this.mv.width - percent * this.state.dwidth,
        height: this.mv.height - percent * this.state.dheight
      })
    }
  }
  
  jump (type) {
    if ((type === 'move' && this.opacity <= 0.5) || (type === 'fixed' && this.opacity >= 0.5)) {
      console.log(1)
    }
  }
  
  render () {
    return (
      <>
        <div className="c-search">
          <div className="c-search-box copy">
            <div className="search" ref="move"><span className="iconfont">&#xe60f;</span></div>
          </div>
          <div className="c-search-box" style={{opacity: 1-this.opacity}}>
            <div className="search" style={{
              width: this.state.width + 'px',
              height: this.state.height + 'px'
            }} onClick={() => {this.jump('move')}}><span className="iconfont">&#xe60f;</span></div>
          </div>
          <div className="c-search-box-fixed" style={{opacity: this.opacity}}>
            <div onClick={() => {this.jump('fixed')}} className="search" ref="target"><span className="iconfont">&#xe60f;</span></div>
          </div>
        </div>
      </>
    )
  }
}
