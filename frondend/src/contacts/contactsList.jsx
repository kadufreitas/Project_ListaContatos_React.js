import React from 'react'
//import Router,{Link} from 'react-router'

export default props => {
    // <Link to="details" params={{ name: "props.name" }}>{props.name}</Link>
    function renderLinks(){
        const contacts = props.listContacts;
        return contacts.map((people) => (
            <a key={people._id} href="#" className="list-group-item list-group-item-action">{people.name}</a>
        ))
    }
    return (
        <div className="list-group">
            {renderLinks()}
        </div>
    ) 
}