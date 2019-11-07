import React, { Component } from 'react';
import { CardColumns , Card , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ComponentCard extends Component{
    render(){
        const { onDelete, onProcess , data } = this.props
        let resultFetch = []
        if(data.data !== undefined){
            resultFetch = data.data
        }
        const CardData = () => {
            return resultFetch.map((key) => {
                const { id , kategori_name , kategori_desc  } = key
                return (
                    <Card key={id}>
                        <Card.Img variant="top" src="1_react.png"/>
                            <Card.Body>
                                <Card.Title>{kategori_name}</Card.Title>
                                {kategori_desc}
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" >
                                    <Button onClick={() => onDelete(id)} 
                                        className="btn btn-danger">Delete
                                    </Button>
                                </small>
                                <small className="text-muted" >
                                    <Button 
                                        onClick={() => onProcess({ id, kategori_name, kategori_desc,  process : 'update'  })} 
                                        className="btn btn-warning">Update
                                    </Button>
                                </small>
                            </Card.Footer>
                    </Card>
                ) 
            })
        }

        return(
            <div>
                <CardColumns>
                    <CardData/>
                </CardColumns>
            </div>
        );
    }

}
export default ComponentCard