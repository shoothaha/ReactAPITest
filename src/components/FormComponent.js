import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class FormComponent extends Component {
    render() {
        let drivers = this.props.value.drivers;
        let deliveryId = this.props.value.chosenDeliveryId;
        let deliveries = this.props.value.deliveries;
        let datePlaceholder = this.props.inputDisabled && deliveryId ? deliveries[deliveryId].date : "date placeholder";
        let namePlaceholder = this.props.inputDisabled && deliveryId ? deliveries[deliveryId].name : "Input your name here";

        return (
            <Form onSubmit={this.props.onSubmit}>
                <FormGroup>
                    <Label name = "Date" for="exampleDate">Date</Label>
                    <Input disabled={this.props.inputDisabled} type="date" name="date" id="exampleDate" placeholder={datePlaceholder} />
                </FormGroup>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input disabled={this.props.inputDisabled} type="text" name="deliveryName" id="Name" placeholder={namePlaceholder} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select Driver</Label>
                    <Input type="select" name="selectDriver" id="exampleSelect">
                        <option>Select a driver</option>
                        {Object.keys(drivers).map((driverName)=>(
                            <option key={driverName+"driver"} value={driverName}>{drivers[driverName].name}</option>
                        ))}
                    </Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}