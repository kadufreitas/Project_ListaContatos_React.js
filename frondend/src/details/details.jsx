import React, {Component} from 'react'

export default class Details extends Component{
    render(){
        return (
            <div>   
                <h2>{this.props.name}</h2>
                <span>Detalhes:</span>
            </div>
        )
    }
}