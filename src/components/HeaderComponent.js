import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavbarBrand,
    Navbar,
    Button
} from 'reactstrap';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href = "/">CartonCloud</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button color = "primary"onClick={this.props.onClick}>Add New Delivery</Button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default HeaderComponent;