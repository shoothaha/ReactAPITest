import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class FormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            drivers: {}
        }
        this.googleInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        axios.get("http://localhost:8000/api/drivers.php").then(res => {
            this.setState({
                drivers: res.data
            });
        });
        
    }

    handleSubmit (e) {
        e.preventDefault();
        axios.post ("http://localhost:8000/api/deliveries.php", {
                        "date": e.target.elements.date.value,
                        "name": e.target.elements.deliveryName.value,
                        "driver_id": e.target.elements.selectDriver.value
        })
        .then(res=>{
            console.log(res);
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input  type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input ref={ this.googleInput } type="text" name="deliveryName" id="Name" placeholder="Your name here" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select Driver</Label>
                    <Input ref="driverValue" type="select" name="selectDriver" id="exampleSelect">
                        {Object.keys(this.state.drivers).map((key, i)=>(
                            <option key={key+"hhh"} value={key}>{this.state.drivers[key].name}</option>
                        ))}
                    </Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}