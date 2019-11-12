import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Counter from 'containers/counter/Container'
import SampleMain from 'views/SampleMain'

export default function Routes() {
    return(
        <Router>
        <Switch>
            <Route path='/' exact component={SampleMain} />
            <Route path='/counter' exact component={Counter} />
        </Switch>
        </Router>
    )
}
