import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Contacts from '../contacts/contacts'
import Details from '../details/details'

export default props => (
    <Router history={hashHistory}>
        <Route path='/contacts' component={Contacts} />
        <Route path='/details' component={Details} />
        {/* <Route
            path='/details'
            render={(props) => <Details {...props} name={} />}
        /> */}
        <Redirect from='*' to='/contacts' />
    </Router>
)