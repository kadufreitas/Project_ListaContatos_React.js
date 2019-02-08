import React, { Component } from 'react'
import ContactsSearch from './contactsSearch'
import ContactsList from './contactsList'
import Grid from '../template/grid'
import axios from 'axios'
import If from '../template/if'
import FloatButton from '../template/floatButton'
import ContactsAdd from './contactsAdd';

import Modal from '../template/modal'

const URL = 'http://localhost:3003/api/contacts';

export default class Contacts extends Component {
    constructor(props){
        super(props)
        this.state = {
            stringSearch:'', 
            contacts:[], 
            showDetails: false, 
            showAdd:false,
            name:'',
            telefone:'',
            endereco:''
        }
        this.hangleChange = this.hangleChange.bind(this);
        this.search = this.search.bind(this);
        this.showAddView = this.showAddView.bind(this)
        this.hangleChangeFormAdd = this.hangleChangeFormAdd.bind(this)
        this.addContact = this.addContact.bind(this)
        this.deleteContacts = this.deleteContacts.bind(this)

        this.listContacts();
    }    

    hangleChange(e){
        this.setState({...this.state, stringSearch:e.target.value})
    }

    search(){
        this.listContacts(this.state.stringSearch);
        // this.setState({...this.state})
    }

    listContacts(regex = ''){
        const search = regex ? `?name__regex=/${regex}/i` : ''
        
        axios.get(URL + search)
        .then(response=>
            this.setState({...this.state, contacts:response.data})    
        )
        .catch(error=>console.log(error))
    }

    deleteContacts(contact){
        axios.delete(`${URL}/${contact._id}`)
            .then(resp => this.listContacts())
    }

    details(){
        //logica para exibir os detalhes de um contato
    }

    showAddView(){
        //logica para adcionar um contato
        this.setState({...this.state, showAdd: true})
    }

    hangleChangeFormAdd(e){        
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({...this.state, [name]:value})
    }

    addContact(e){
        e.preventDefault();
        const name = this.state.name;
        const telphone = this.state.telefone;
        const address = this.state.telefone;

        axios.post(URL,{ name, telphone, address })
        .then(response=>
            this.listContacts()    
        )
        .catch(error=>console.log(error))
    }

    render(){
        return (
            <div className="row">
                <Grid cols='12 6'>
                    <ContactsSearch 
                        search={this.search}
                        onChange={this.hangleChange} 
                        stringSearch={this.state.stringSearch} />
                    <ContactsList 
                        details={this.details} 
                        listContacts={this.state.contacts} 
                        deleteContacts={this.deleteContacts}
                    />
                    <FloatButton iconType="fa fa-plus" addContact={this.showAddView}/>
                </Grid>
                <Grid cols='12 6'>
                    <If test={this.state.showDetails}>
                        <h2>Details tela</h2>
                    </If>
                    <If test={this.state.showAdd}>
                        <ContactsAdd 
                            addContact={this.addContact} 
                            onChange={this.hangleChangeFormAdd} 
                            name={this.state.name}
                            telefone={this.state.telefone}
                            endereco={this.state.endereco}/>
                    </If>
                </Grid>
                <Modal title="Deletar Contato" />
            </div>
        )
    }
}