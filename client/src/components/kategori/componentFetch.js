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
                kategori_name : '',
                kategori_desc : '',
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
        this.getDataKategori()
    }
    onProcess = ({ id, kategori_name, kategori_desc, process }) => {
        this.setState({
            form : { id, kategori_name, kategori_desc, process }
        })
        this.handleShow()
    }
    onDelete = (id) => {
        axios.delete(baseUrl + 'kategori',{ data: {id}})
        .then(result => {
            this.getDataKategori()
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
            url: baseUrl + 'kategori',
            data: {
                id , ...rest
            }
          }).then(result => {
            this.getDataKategori()
            this.handleClose()
            alert(`status : ${result.status}`)
            return result
        })
    }
    getDataKategori(){
        axios.get(baseUrl + 'kategori')
             .then(dataSaved => this.setState({dataSaved}))
    }
    render(){
        const { dataSaved , showModal, form } = this.state
        const { kategori_name, kategori_desc, process  } = form
        
        return(
            <div>
                <Button 
                    onClick={() => this.onProcess({ id : '' , kategori_name : '' , kategori_desc : '' , email : '', process : 'create'   })} 
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
                                    <InputGroup.Text>Kategori Name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name = "kategori_name" onChange={this.onChange} value={kategori_name} type="text"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Kategori Desc</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name = "kategori_desc" onChange={this.onChange} value={kategori_desc}
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