//Greeter,js
import React, {Component} from 'react'
import styles from '../css/nav.css';//导入
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {render} from 'react-dom';


class LeftNav extends Component {
    handleClick = (e) => {
        console.log('click ', e);
    };

    render() {
        // const menuList = ['Appliances', 'Vegetables', 'Patterns', 'Cactus' , 'Birthday'];

        const menuList = [{
            value: 'Appliances',
            children: [
                {
                    value: 'Fan'
                },
                {
                    value: 'Telephone'
                }
            ]
        }, {
            value: 'Vegetables',
            children: [
                {
                    value: 'Carrot'
                }
            ]
        }
        ];

        // var menuItems = menuList

        let menuItems = function (menuItems) {
            return menuItems.map(function (item, index, input) {
                // alert(item.value);
                return <Menu.Item key={item.value}>{item.value}</Menu.Item>
            })
        };

        let subMenus = menuList.map(function (item, index, input) {
            let subMenu =
                <SubMenu key={menuList[index].value} title={menuList[index].value}>
                    {menuItems(menuList[index].children)}
                </SubMenu>;
            return subMenu;
        });

        return (
            <Menu
                onClick={this.handleClick}
                style={{width: '100%', border: 'none'}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="gift"/><span>Icons</span></span>} id="iconsMenu">
                    {/*<MenuItemGroup key="g1" title="Item 1">*/}
                    {/*<Menu.Item key="1">Option 1</Menu.Item>*/}
                    {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
                    {/*</MenuItemGroup>*/}
                    {/*<MenuItemGroup key="g2" title="Item 2">*/}
                    {/*<Menu.Item key="3">Option 3</Menu.Item>*/}
                    {/*<Menu.Item key="4">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="5">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="6">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="7">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="84">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="14">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="41">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="42">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="44">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="45">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="46">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="47">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="49">Option 4</Menu.Item>*/}
                    {/*<Menu.Item key="421">Option 4</Menu.Item>*/}
                    {/*<SubMenu key="sub3" title="Submenu">*/}
                    {/*<Menu.Item key="7">Option 7</Menu.Item>*/}
                    {/*<Menu.Item key="8">Option 8</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*</MenuItemGroup>*/}
                    {subMenus}
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="rocket"/><span>Projects</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>

                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}


// for (let i = 0; i < menuList.length; i++){
//     render(<SubMenu key={menuList[i]} id={menuList[i]} />, document.getElementById('iconsMenu'));
// }

export default LeftNav;
