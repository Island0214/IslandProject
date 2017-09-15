//main.js
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import style from './components/css/main.css';//使用require导入css文件
import 'antd/dist/antd.less';

import React from 'react';
import {render} from 'react-dom';
import MyNav from './components/js/nav.js';
import MainPart from './components/js/mainPart.js';
import Panel from './components/js/panel.js';
import QueueAnim from 'rc-queue-anim';

import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {  createStore, applyMiddleware   } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './components/redux/reducers';



class HelloTitle extends React.Component{
    state = {
        show: true,
    };
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
}
//
// const hideAction = { type: 'hide' };
//
//
// // Reducer
// function hideMain(state = { active: true }, action) {
//     const active = state.active;
//     switch (action.type) {
//         case 'hide':
//             return { active: false}
//         default:
//             return state
//     }
// }
//
// // Store
// const store = createStore(hideMain);
//
// // Map Redux state to component props
// function mapStateToProps(state) {
//     return {
//         value: state.active
//     }
// }
//
// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//     return {
//         hideMain: () => dispatch(hideAction)
//     }
// }
//
// // Connected Component
// const App = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MainPart, MyNav);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('panelPart')
// );

const store = createStore(reducer, applyMiddleware(thunk));


render(<MyNav />, document.getElementById('nav'));
render(
    <Provider store={store}>
        <MainPart />
    </Provider>
    , document.getElementById('panelPart'));
render(<HelloTitle />, document.getElementById('headTitle'));

function showUIView() {
    
}