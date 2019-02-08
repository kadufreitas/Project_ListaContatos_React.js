import React from 'react'

export default props => {
    function keyEvent(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            props.search()
        }
    }
    return (
        <form className="form-inline mb-4" role="search">
            <div className="form-group">
                <input type="text" className="form-control" 
                    placeholder="Search"
                    onKeyPress={keyEvent}
                    onChange={props.onChange} 
                    value={props.stringSearch} />
            </div>
            <button type="submit" className="ml-3 btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top"
                onClick={props.search}>Buscar</button>
        </form>
    )
}