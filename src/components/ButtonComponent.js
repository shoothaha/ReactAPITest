import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class ButtonComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: this.props.value
        }
        this.removeRecord = this.removeRecord.bind(this);
    }

    removeRecord () {
        let id = this.props.value;
        console.log(this.state.id);
        const data = axios.delete(`http://localhost:8000/api/deliveries.php?id=${id}`).then(res=>console.log(res))
                        .catch(error => {
                            console.log(error);
                        });
       console.log(data);
    }

    render () {
        return (
            <div>
                <Button outline color="primary" onClick = {this.removeRecord}>Edit</Button>
                <Button outline color="danger" onClick = {this.removeRecord}>Delete</Button>
            </div>
        );
    }
}

export default ButtonComponent;