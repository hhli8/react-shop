import React from 'react'
import {connect} from 'react-redux'

class Detail extends React.Component{
  componentDidMount() {
    console.log(this.props.match.params) // 输出id
  }
  
  render () {
    return (
      <div>12345678</div>
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
