//Greeter,js
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import config from './config.json';
import styles from './greeter.css';//导入

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter
