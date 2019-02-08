import React from 'react'

export default props => (
    <div className="card">
        <div className="card-body elevationCard">
            <h5 class="card-title">Preencha a informações do novo contato</h5>
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="inputName" className=" control-label">Name</label>
                    <div className="">
                        <input type="text" id="inputName" name="name"
                            onChange={props.onChange}
                            value={props.name}
                            className="form-control"
                            placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputTelefone" className=" control-label">Telefone</label>
                    <div className="">
                        <input type="text" id="inputTelefone" name="telefone"
                            onChange={props.onChange}
                            value={props.telefone}
                            className="form-control"
                            placeholder="Telefone" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEndereco" className=" control-label">Endereço</label>
                    <div className="">
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
                            className="btn btn-success">Adicionar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
)