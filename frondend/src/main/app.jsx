import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Routes from './routes'
import Navbar from '../template/navbar'

export default props => (
    <div>
        <Navbar title='Contatos'/>
        <div className="container">
            <Routes/>
        </div>
    </div>
)