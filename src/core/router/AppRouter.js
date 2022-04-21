import React, { Suspense } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Styles
// import { GlobalStyle } from '../styles/GlobalStyles'
import './styles.css'

// Pages
const Home = React.lazy(() => import('../../pages/HomePage'))
const ErrorPage = React.lazy(() => import('../../pages/ErrorPage'))

export const AppRouter = () => {
  return (
    <Suspense fallback={<div />}>
      {/* <GlobalStyle /> */}

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Suspense>
  )
}
