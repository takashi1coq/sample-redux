import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Counter from 'containers/counter/Container'
import {Header} from 'views/Header'

export function Routes() {
    return(
        <Router>
        <Switch>
            <Route path='/' exact component={Header} />
            <Route path='/counter' exact component={Counter} />
        </Switch>
        </Router>
    )
}
