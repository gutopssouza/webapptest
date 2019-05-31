import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import TableNf from '../components/TableNf'

export default props =>
    <Switch>
        <Route path='/' component={TableNf} />
        <Redirect from='*' to='/' />
    </Switch>