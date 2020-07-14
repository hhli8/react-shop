import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import $api from '@/utils/fetch.js'
import './banner.scss'

export default class h extends React.Component {
  state = {
    data: []
  }
  
  async componentDidMount() {
    var data = await $api('/shop/default/banner', {}, 'get')
    this.setState({
      data
    })
  }
  
  render () {
    return (
      <>
        <WingBlank className="c-index-banner">
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.data.map(val => (
              <img
                type-code={val.code}
                key={val} src={val.src} alt=""
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}/>
            ))}
          </Carousel>
        </WingBlank>
      </>
    )
  }
}

//<a
//key={val}
//href="http://www.alipay.com"
//style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
//>
//<img
//  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
//  alt=""
//  style={{ width: '100%', verticalAlign: 'top' }}
//  onLoad={() => {
//    window.dispatchEvent(new Event('resize'));
//    this.setState({ imgHeight: 'auto' });
//  }}
///>
//</a>