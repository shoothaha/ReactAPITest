import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ButtonComponent extends Component {
    render () {
        let recordId = this.props.value;
        return (
            <div>
                <Button outline color="primary" onClick = {this.props.onClick.bind(this, recordId)}>Edit</Button>{'  '}
                <Button outline color="danger" onClick = {this.props.removeRecord.bind(this, recordId)}>Delete</Button>
            </div>
        );
    }
}

export default ButtonComponent;