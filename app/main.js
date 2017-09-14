//main.js
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import style from './Component/main.css';//使用require导入css文件
import 'antd/dist/antd.less';

import React from 'react';
import {render} from 'react-dom';
import MyNav from './Component/nav.js';
import MainPart from './Component/mainPart.js';
import Panel from './Component/panel.js';
import QueueAnim from 'rc-queue-anim';


// import 'bootstrap/dist/css/bootstrap.css'
// import 'node_modules/bootstrap/dist/css/bootstrap.css'

// render(<Greeter />, document.getElementById('root'));
class HelloTitle extends React.Component{
    state = {
        show: true,
    };
    // onClick = () => {
    //     this.setState({
    //         show: !this.state.show,
    //     });
    // };
    render() {
        return (
            <div className="queue-demo">
                <QueueAnim className="demo-content" delay={100}
                           animConfig={[
                               { opacity: [1, 0], translateY: [0, 50] },
                               { opacity: [1, 0], translateY: [0, -50] }
                           ]}>
                    {this.state.show ? [
                        <p key="0" className={style.titleP}>ISLAND<br/>PROJECT</p>
                    ] : null}
                </QueueAnim>
            </div>
        );
    }
};

render(<MyNav />, document.getElementById('nav'));
render(<MainPart />, document.getElementById('panelPart'));


render(<HelloTitle />, document.getElementById('headTitle'));
