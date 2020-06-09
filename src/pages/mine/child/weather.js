import React from 'react'
import './weather.scss'

export default class Weather extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      w: {}
    }
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    var w = nextProps.weather
    this.setState({
      w
    })
  }
  
  componentDidMount() {
    // console.log(this.state)
  }
  
  render() {
    let w = this.state.w
    return (
      <div className={['p-weather', w.wea_img].join(' ')}>
        <div><span className="name">空气质量:</span>{w.air}</div>
        <div><span className="name">风向:</span>{w.win}</div>
        <div><span className="name">风力等级:</span>{w.win_speed}</div>
        <div><span className="name">风速:</span>{w.win_meter}</div>
        
        <div><span className="name">实时温度:</span>{w.tem}</div>
        <div><span className="name">白天温度(高温):</span>{w.tem_day}</div>
        <div><span className="name">白天温度(低温):</span>{w.tem_night}</div>
        
        <div><span className="name">天气对应图标:</span>{w.wea_img}</div>
        xue、lei、shachen、wu、bingbao、yun、yu、yin、qing
        <div><span className="name">天气情况:</span>{w.wea}</div>
        
        <div><span className="name">城市名称:</span>{w.city}</div>
        <div><span className="name">更新时间:</span>{w.update_time}</div>
      </div>
    )
  }
}
