import React, { Component } from 'react';

class FooterComponent extends Component {
    render () {
        const style = {
            fontSize: '12px',
            textAlign: "center"
        };
        return (
            <p style={style}> React API code challenge</p>
        )
    }
}

export default FooterComponent;