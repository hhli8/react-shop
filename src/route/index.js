import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
// HashRouter
// import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import asyncComponent from '@/utils/asyncComponent'

import home from '@/pages/default'
const shopCar = asyncComponent(() => import('@/pages/shopcar'))
const classify = asyncComponent(() => import('@/pages/classify'))
const mine = asyncComponent(() => import('@/pages/mine'))
const movieDetail = asyncComponent(() => import('@/pages/gooddetail/movie'))
const personDetail = asyncComponent(() => import('@/pages/gooddetail/person'))

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
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={home} />
      <Route path="/shopcar" component={shopCar} />
      <Route path="/classify" component={classify} />
      <Route path="/mine" component={mine} />
      <Route path="/movie-detail/:id/:type" component={movieDetail} />
      <Route path="/person-detail/:id" component={personDetail} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

//    <Route path="*" component={base.notfound} />
//    <Route path="/login" render={() => <div>Home</div>} />

//  <CacheSwitch>
//    <CacheRoute path="/mine" component={mine} />
//  </CacheSwitch>






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