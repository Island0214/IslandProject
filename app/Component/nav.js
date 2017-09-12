//Greeter,js
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import config from './config.json';
import styles from './nav.css';//导入
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class MyNav extends Component{
    render() {
        return (
            <Navbar inverse collapseOnSelect className={styles.bg}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" className={styles.menuItem}>ISLAND</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#" className={styles.menuItem}>首页</NavItem>
                        <NavItem eventKey={2} href="#" className={styles.menuItem}>UI</NavItem>
                        <NavItem eventKey={3} href="#" className={styles.menuItem}>项目</NavItem>
                        {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*<MenuItem eventKey={3.1}>UI</MenuItem>*/}
                            {/*<MenuItem eventKey={3.2}>项目</MenuItem>*/}
                            {/*/!*<MenuItem eventKey={3.3}>Something else here</MenuItem>*!/*/}
                            {/*/!*<MenuItem divider />*!/*/}
                            {/*/!*<MenuItem eventKey={3.3}>Separated link</MenuItem>*!/*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" className={styles.menuItem}>联系</NavItem>
                        {/*<NavItem eventKey={2} href="#">Link Right</NavItem>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNav
