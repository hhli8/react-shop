import React from 'react'
import { Link } from 'react-router-dom';
export  default class Index extends React.Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      
    };
  }
  componentDidMount () {
    
  }
  render() {
    return (
      <div>
          <h1>p1</h1>
          <Link to="/">index</Link>
      </div>
    )
  }
}