import React from 'react'
import {connect} from 'react-redux'
import Name from './child/name'

class Detail extends React.Component{
  componentDidMount() {
    // console.log(this.props)
    // location.query location.state
    // this.props.match.params
    console.log(this.props.location.query)
    console.log(this.props.location.state)
    console.log(this.props.match.params)
  }
  
  render () {
    return (
      <div>12345678\n\n\n\n<Name mid="midname"/></div>
    )
  }
}

const mapStateToProps = state => ({
  //
})
const actionCreators = {
  //
}
export default connect(mapStateToProps, actionCreators)(Detail)
