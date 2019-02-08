import React,{Component} from 'react'
import If from './if'

export default class Modal extends Component {

    // Get the modal
    //var modal = document.getElementById('myModal');
    //const flag = false;
    // Get the button that opens the modal
    //var btn = document.getElementById("myBtn");
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
        this.handleOnClickButton = this.handleOnClickButton.bind(this)
        this.handleOnClickClose = this.handleOnClickClose.bind(this)
    }


    // Get the <span> element that closes the modal
    //var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    handleOnClickButton() {
        //modal.style.display = "block";
        this.setState({...this.state, showModal:true})
    }

    // When the user clicks on <span> (x), close the modal
    handleOnClickClose(e) {
        if (this.node.contains(e.target)) {
            console.log('inside');            
        }
        //modal.style.display = "none";
        //this.setState({...this.state, showModal:false})
        console.log('clicou fora');        
    }

    componentWillMount(){
        document.addEventListener('mousedown', this.handleOnClickClose)
    }

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }

    render(){
        return (
            <div className="modalComponent" ref={node => this.node = node}>
                <button id="myBtn" onClick={this.handleOnClickButton}>Open Modal</button>
            
                <If test={this.state.showModal} >
                    <div id="myModal" className="modal">        
                        <div className="modal-content">
                            <span className="close" onClick={this.handleOnClickClose}>&times;</span>
                            <p>Some text in the Modal..</p>
                        </div>
                    </div>
                </If>
            </div>
        )
    }   
}
    
