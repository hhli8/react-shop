import React from 'react'

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function TestNoProp({item}) {
  return (
    <>
      <p>{item.name}</p>
    </>
  )
}

export default class Monline extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: ['coconut'],
      temperature: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.divRef = React.createRef();
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
    this.setState({temperature: event.target.value});
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }
  
  
  render () {
    const temperature = this.state.temperature;
    var item = {
      name: 'no-prop'
    }
    // console.log(window.referer, document.referrer)
    console.log(this.divRef.current) // 输出选择的dom
    console.log(this.refs.rrr)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
        
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            Welcome
          </h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder>
        <TestNoProp item={item} />
        <div ref='rrr'>测试ref</div>
        <div ref={this.divRef}>测试ref</div>
      </form>
    )
  }
}
