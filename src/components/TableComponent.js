import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Buttons from './ButtonComponent';

class TableComponent extends Component {
    render() {
        let deliveries = this.props.value.deliveries;
        let drivers = this.props.value.drivers;
        return (
            <div>
                <h1>Deliveries</h1>
                <Table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Driver</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(deliveries).map((item, i) => (
                            <tr key={i+'jack'}>
                                <th scope="row">{item}</th>                            
                                <td key = {i+'col1'}>{deliveries[item].date}</td>
                                <td key = {i+'col2'}>{deliveries[item].name}</td>
                                <td key = {i+'col3'}>{drivers[deliveries[item].driver_id].name}</td> 
                                <td><Buttons key={i+'hello'} value={item} onClick={this.props.onClick} removeRecord = {this.props.removeRecord}/></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableComponent;