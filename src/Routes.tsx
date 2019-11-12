import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Counter from 'src/containers/counter/Container'
import SampleMain from 'src/views/SampleMain'

const Routes: React.FC = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SampleMain} />
        <Route path="/counter" exact component={Counter} />
      </Switch>
    </Router>
  )
}

export default Routes
