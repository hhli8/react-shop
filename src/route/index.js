import React from 'react'
// { Suspense, lazy }
// import { Router, Route, IndexRoute } from 'react-router'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
// import createHistory from 'history/createHashHistory'
// import * as base from '@/pages/base' // 基础
// import { createHashHistory } from 'history'
//const Home = lazy(() => import('@/pages/default'))
//const Classify = lazy(() => import('@/pages/classify'))
//const Shopcar = lazy(() => import('@/pages/shopcar'))
//const Mine = lazy(() => import('@/pages/mine'))
import asyncComponent from '@/utils/asyncComponent'

import home from '@/pages/default'
const shopCar = asyncComponent(() => import('@/pages/shopcar'))

// const history = createHistory()
// const history = createHashHistory()

//export default () => (
//<Router history={history}>
//  <Suspense fallback={<div>Loading...</div>}>
//    <Switch>
//      <Route path="/" component={Home} />
//      <Route path="/classify" component={Classify} />
//      <Route path="/shopcar" component={Shopcar} />
//      <Route path="/mine" component={Mine} />
//      <Route path="/login" component={base.login} />
//    </Switch>
//  </Suspense>
//</Router>
//)
export default () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={home} />
      <Route path="/shopcar" component={shopCar} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
)

//    <Route path="*" component={base.notfound} />
//    <Route path="/login" render={() => <div>Home</div>} />








//<Router history={history}>
//    <Switch>
//      <Route exact path="/" component={Index}/>
//      <Route path="/brand" component={Brand}/>
//      <Route path="/p1" component={P1}/>
//      <Route path="/p2" component={P2}/>
//      
//      <Route path="/react-redux-demo" component={REACTreduxDemo}/>
//      <Route path="/about" component={About} />
//      <Route path="/items" component={Items} />
//    </Switch>
//  </Router>