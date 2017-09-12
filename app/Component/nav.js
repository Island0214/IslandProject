//Greeter,js
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import config from './config.json';
import styles from './nav.css';//导入

class Nav extends Component{
    render() {
        return (
            <ul className="am-nav am-nav-pills am-nav-justify">
                <li className="am-active"><a href="#">首页</a></li>
                <li><a href="#">作品</a></li>
                <li><a href="#">资料</a></li>
            </ul>
        );
    }
}

export default Nav