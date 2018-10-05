import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavbarBrand,
    Navbar,
    NavLink
} from 'reactstrap';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">CartonCloud</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Deliveries</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">New Delivery</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default HeaderComponent;