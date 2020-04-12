import React from 'react'
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
export default class Login extends React.Component{
	constructor(props, context) {
		super(props)
		this.state = {
		  loading: false,
		  isCertificates: false,
		  show: true,
		}
	}
//render() {
//  return (
//    <div>
//        <h1>p1</h1>
//        <Link to="/">index</Link>
//    </div>
//  )
//}
  render() {
//  const { getFieldDecorator } = this.props.form
//  console.log(this.props.loginResponse)
    return (
      <div className="login-container">
        <h1>login</h1>
        5555555
      </div>
    )
  }
}
