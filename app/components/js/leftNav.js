//Greeter,js
import React, {Component} from 'react'
import styles from '../css/nav.css';//导入
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftNav extends Component{
    handleClick = (e) => {
        console.log('click ', e);
    }

    render() {

        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: '100%',  }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                        <Menu.Item key="5">Option 4</Menu.Item>
                        <Menu.Item key="6">Option 4</Menu.Item>
                        <Menu.Item key="7">Option 4</Menu.Item>
                        <Menu.Item key="84">Option 4</Menu.Item>
                        <Menu.Item key="14">Option 4</Menu.Item>
                        <Menu.Item key="41">Option 4</Menu.Item>
                        <Menu.Item key="42">Option 4</Menu.Item>
                        <Menu.Item key="44">Option 4</Menu.Item>
                        <Menu.Item key="45">Option 4</Menu.Item>
                        <Menu.Item key="46">Option 4</Menu.Item>
                        <Menu.Item key="47">Option 4</Menu.Item>
                        <Menu.Item key="49">Option 4</Menu.Item>
                        <Menu.Item key="421">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default LeftNav;
