import React from 'react'
import Select from './child/select.js'
import Recommend from './child/recommend.js'
import List from './child/list.js'
import ScrollTop from '@/components/scrollTop'
import './index.scss'

export default class Nav extends React.Component {
  render () {
    return (
      <div className="p-social flex">
        <Select />
        <Recommend />
        <List />
        <ScrollTop />
      </div>
    )
  }
}
