import React from 'react'

export default props => (
    <div className="elevationCard">
        <form className="form-horizontal">
            <div className="form-group">
                <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" id="inputName" name="name"
                        onChange={props.onChange}
                        value={props.name}
                        className="form-control" 
                        placeholder="Email" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputTelefone" className="col-sm-2 control-label">Telefone</label>
                <div className="col-sm-10">
                    <input type="text" id="inputTelefone" name="telefone"
                        onChange={props.onChange}
                        value={props.telefone}
                        className="form-control" 
                        placeholder="Telefone" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputEndereco" className="col-sm-2 control-label">Endereço</label>
                <div className="col-sm-10">
                    <input type="text" id="inputEndereco" name="endereco"
                        onChange={props.onChange}
                        value={props.endereco}
                        className="form-control" 
                        placeholder="Endereço" />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button
                    onClick={props.addContact}
                    className="btn btn-default">Adicionar</button>
                </div>
            </div>
        </form>
    </div>
)