import React from 'react'

export default props=> (
    <a onClick={props.addContact} className="button-float">
        <i className={`${props.iconType} my-float`}></i>
    </a>
)