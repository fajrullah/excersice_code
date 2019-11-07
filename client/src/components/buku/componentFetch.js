import React, { Component } from 'react';
import axios from 'axios';
import ComponentCard from './componentCard';
import { Modal , Button , InputGroup, FormControl} from 'react-bootstrap';
import baseUrl  from '../../config.js'
class ComponentFetch extends Component{
    constructor(props){
        super(props)
        this.state = {
            apikey : '',
            url : '',
            data : [],
            loading : false,
            show : '',
            dataSaved : [],
            handleClose : false,
            showModal : false,
            form : {
                id : '',
                buku_name : '',
                buku_desc : '',
                kategoriId : '',
                penulisId : '',
                process : 'create'
            }
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onProcess = this.onProcess.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }
    handleShow(){
        this.setState({
            showModal : true
        })
    }
    handleClose(){
        this.setState({
            showModal : false
        })
    }
    componentDidMount(){
        this.getDataBuku()
    }
    onProcess = ({  id ,buku_name, buku_desc, kategoriId, penulisId, process }) => {
        this.setState({
            form : {  id ,buku_name, buku_desc, kategoriId, penulisId, process }
        })
        this.handleShow()
    }
    onDelete = (id) => {
        axios.delete(baseUrl + 'buku',{ data: {id}})
        .then(result => {
            this.getDataBuku()
            alert(`status : ${result.status}`)
            return result
        })
    }
    onChange = (event) => {
        this.setState({
            form : {
                ...this.state.form,
                [event.target.name] : event.target.value
            }
            
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        const { form } = this.state
        const { id , process ,...rest} = form
        const method = process === 'create' ? 'post' : 'put'
        axios({
            method: method,
            url: baseUrl + 'buku',
            data: {
                id , ...rest
            }
          }).then(result => {
            this.getDataBuku()
            this.handleClose()
            alert(`status : ${result.status}`)
            return result
        })
    }
    getDataBuku(){
        axios.get(baseUrl + 'buku')
             .then(dataSaved => this.setState({dataSaved}))
    }
    render(){
        const { dataSaved , showModal, form } = this.state
        const {  buku_name, buku_desc, kategoriId, penulisId,  process  } = form
        
        return(
            <div>
                <Button 
                    onClick={() => this.onProcess({ id : '' , buku_name : '' , buku_desc : '', kategoriId : '' , penulisId : '', process : 'create'   })} 
                    className="btn btn-info">Create
                </Button>
                <ComponentCard data = {dataSaved} onDelete={this.onDelete} onProcess={this.onProcess}/>
                <Modal show={showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading {process}</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                        <form onSubmit={this.onSubmit}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Buku Name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name = "buku_name" onChange={this.onChange} value={buku_name} type="text"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Buku Desc</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name = "buku_desc" onChange={this.onChange} value={buku_desc}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>kategoriId</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="kategoriId" onChange={this.onChange} value={kategoriId}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>penulisId</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="penulisId" onChange={this.onChange} value={penulisId}
                                />
                            </InputGroup>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </form>
                        </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ComponentFetch