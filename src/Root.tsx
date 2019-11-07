import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Counter from 'containers/counter/Container'

export function Routes() {
    return(
        <Router>
        <Switch>
            <Route path='/' component={Counter} />
            <Route path='/counter' component={Counter} />
        </Switch>
        </Router>
    )
}
