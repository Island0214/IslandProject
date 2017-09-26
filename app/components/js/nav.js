//Greeter,js
import React, {Component} from 'react'
import styles from '../css/nav.css';//导入
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl} from "react-bootstrap";
import {Button, Cascader} from 'antd';
import actions from '../redux/actions/UIFrameAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

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
        let { state, actions } = this.props;

        function showMainView() {
            actions.hideContactView();
            actions.hideProjectView();
            actions.hideUIView();
            actions.showMainView();
        }

        function showUIView() {
            actions.hideContactView();
            actions.hideProjectView();
            actions.hideMainView();
            actions.showUIView();
        }

        function showProjectView() {
            actions.hideContactView();
            actions.hideMainView();
            actions.hideUIView();
            actions.showProjectView();
        }

        function showContactView() {
            actions.hideMainView();
            actions.hideProjectView();
            actions.hideUIView();
            actions.showContactView();

        }

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
                        <NavItem eventKey={1} href="#" className={styles.menuItem} onClick={showMainView} >HOME</NavItem>
                        <NavItem eventKey={2} href="#" className={styles.menuItem} onClick={showUIView}>DESIGN</NavItem>
                        <NavItem eventKey={3} href="#" className={styles.menuItem} onClick={showProjectView}>BLOG</NavItem>
                        <NavItem eventKey={4} href="#" className={styles.menuItem} onClick={showContactView}>CONTACT</NavItem>
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

function selectState(state) {
    return {
        state: state.uiFrameReducer
    }
}

function buildActionDispatcher(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(selectState, buildActionDispatcher)(MyNav);
