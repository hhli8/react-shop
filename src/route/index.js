import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'

const home = lazy(() => import('@/pages/default'))
const shopCar = asyncComponent(() => import('@/pages/shopcar'))
const classify = asyncComponent(() => import('@/pages/classify'))
const mine = asyncComponent(() => import('@/pages/mine'))
const movieDetail = asyncComponent(() => import('@/pages/gooddetail/movie'))
const personDetail = asyncComponent(() => import('@/pages/gooddetail/person'))

// const demoContext = lazy(() => import('@/pages/demo/context'))
// const demoContext = lazy(() => import('@/pages/demo/errBound.js'))
const demoContext = lazy(() => import('@/pages/demo/hook.js'))

const travel = lazy(() => import('@/pages/modules/travel'))
const travelDetail = lazy(() => import('@/pages/modules/travel/detail.js'))
const friends = lazy(() => import('@/pages/modules/social'))
const friendsDetail = lazy(() => import('@/pages/modules/social/person.js'))
const friendsChat = lazy(() => import('@/pages/modules/social/chat.js'))

export default () => (
  <BrowserRouter>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/shopcar" component={shopCar} />
        <Route path="/classify" component={classify} />
        <Route path="/mine" component={mine} />
        <Route path="/movie-detail/:id/:type" component={movieDetail} />
        <Route path="/person-detail/:id" component={personDetail} />
        <Route path="/demoContext" component={demoContext} />
        <Route path="/travel" component={travel} />
        <Route path="/travelDetail" component={travelDetail} />
        <Route path="/friends" component={friends} />
        <Route path="/friendsDetail" component={friendsDetail} />
        <Route path="/friendsChat" component={friendsChat} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

// //fallback={<div>Loading...</div>}>