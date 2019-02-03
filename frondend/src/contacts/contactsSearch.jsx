import React from 'react'

export default props => {
    function keyEvent(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            props.search()
        }
    }
    return (
        <form className="form-inline" role="search">
            <div className="form-group">
                <input type="text" className="form-control" 
                    placeholder="Search"
                    onKeyPress={keyEvent}
                    onChange={props.onChange} 
                    value={props.stringSearch} />
            </div>
            <button type="submit" className="btn btn-default"
                onClick={props.search}>Buscar</button>
        </form>
    )
}