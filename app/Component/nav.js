//Greeter,js
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import styles from './nav.css';//导入
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl} from "react-bootstrap";
import {Button, Cascader} from 'antd';
// import 'antd/lib/button/style/css';

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

function onChange(value) {
    console.log(value);
}

class MyNav extends Component{
    render() {
        return (
            <Navbar collapseOnSelect className={styles.bg}>
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
                        <NavItem eventKey={4} href="#" className={styles.menuItem}>联系</NavItem>
                        {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*<MenuItem eventKey={3.1}>UI</MenuItem>*/}
                            {/*<MenuItem eventKey={3.2}>项目</MenuItem>*/}
                            {/*/!*<MenuItem eventKey={3.3}>Something else here</MenuItem>*!/*/}
                            {/*/!*<MenuItem divider />*!/*/}
                            {/*/!*<MenuItem eventKey={3.3}>Separated link</MenuItem>*!/*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    <Nav pullRight>
                        {/*<Navbar.Form pullLeft>*/}
                            {/*<FormGroup>*/}
                                {/*<FormControl type="text" placeholder="Search" />*/}
                            {/*</FormGroup>*/}

                            {/*<Button type="dashed" shape="circle" icon="search" className={styles.navSearchButton}/>*/}
                            {/*/!*<Button type="submit">Submit</Button>*!/*/}
                        {/*</Navbar.Form>*/}
                        <Navbar.Form pullLeft className={styles.navBar}>
                            {/*<FormGroup>*/}
                                {/*<FormControl type="text" placeholder="Search" />*/}
                            {/*</FormGroup>*/}
                            <Cascader  className={styles.cascader}
                                options={options}
                                onChange={onChange}
                                placeholder="Please select"
                                showSearch
                            />
                            <Button type="dashed" shape="circle" icon="search" className={styles.navSearchButton}/>

                            {/*<Button type="submit">Submit</Button>*/}
                        </Navbar.Form>
                        {/*<NavItem eventKey={1} href="#" className={styles.menuItem}>*/}

                        {/*</NavItem>*/}
                        {/*<NavItem eventKey={2} href="#">*/}
                            {/*<Button type="dashed" shape="circle" icon="search" className={styles.navSearchButton}/>*/}

                        {/*</NavItem>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}



export default MyNav
