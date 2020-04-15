import React from 'react'
import Nav from '@/components/nav'
export default class Login extends React.Component{
  constructor(props, context) {
    super(props)
    this.state = {
      //
    }
  }
  render() {
    return (
      <div>
        <div>
          mine
        </div>
        <Nav index={3}></Nav>
      </div>
    )
  }
}
