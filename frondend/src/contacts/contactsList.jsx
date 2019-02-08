import React from 'react'
//import Router,{Link} from 'react-router'

export default props => {
    // <Link to="details" params={{ name: "props.name" }}>{props.name}</Link>
    function renderLinks(){
        const contacts = props.listContacts;
        return contacts.map((people) => (
            <a key={people._id} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{people.name}</h5>
                    <button onClick={()=> props.deleteContacts(people)} type="button" className="btn btn-outline-danger">Delete</button>
                </div>
                <small>{people.telphone}</small>
            </a>
        ))
    }
    return (
        <div className="list-group">
            {renderLinks()}
        </div>
    ) 
}