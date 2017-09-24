//main.js
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import style from './components/css/main.css';//使用require导入css文件
import 'antd/dist/antd.less';

import React from 'react';
import {render} from 'react-dom';
import MyNav from './components/js/nav.js';
import ContentPart from './components/js/contentPart.js';
import MainPart from './components/js/mainPart.js';
import Panel from './components/js/panel.js';
import QueueAnim from 'rc-queue-anim';

import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import reducer from './components/redux/reducers';


class HelloTitle extends React.Component {
    state = {
        show: true,
    };

    render() {
        return (
            <div className="queue-demo">
                <QueueAnim className="demo-content" delay={100}
                           animConfig={[
                               {opacity: [1, 0], translateY: [0, 50]},
                               {opacity: [1, 0], translateY: [0, -50]}
                           ]}>
                    {this.state.show ? [
                        <p key="0" className={style.titleP}>ISLAND<br/>PROJECT</p>
                    ] : null}
                </QueueAnim>
            </div>
        );
    }
}

const store = createStore(reducer, applyMiddleware(thunk));


render(
    <Provider store={store}>
        <MyNav/>
    </Provider>
    , document.getElementById('nav'));
render(
    <Provider store={store}>
        <MainPart/>
    </Provider>
    , document.getElementById('panelPart'));
render(<HelloTitle/>, document.getElementById('headTitle'));
render(<HelloTitle/>, document.getElementById('headTitle'));
// render(<ContentPart />, document.getElementById('contentPart'));
function showUIView() {

}