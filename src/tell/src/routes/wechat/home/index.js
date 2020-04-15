import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch({ type: 'GET_PROJECT', payload: { projectName: 'tap4fun' } });
  }

  render() {
    const className = 'Wechat-Home';

    return (
      <div className={`${className}`}>
        <h1>Home</h1>
        <h2>The project name is : { this.props.reducer.projectName }</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reducer: state.wechat
});

export default connect(mapStateToProps)(Home)
