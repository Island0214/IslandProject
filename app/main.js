//main.js
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.less';

import React from 'react';
import {render} from 'react-dom';
import MyNav from './components/js/nav.js';
import ContentPart from './components/js/contentPart.js';
import MainPart from './components/js/mainPart.js';
import HelloTitle from './components/js/title.js';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import reducer from './components/redux/reducers';


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

render(
    <Provider store={store}>
        <HelloTitle/>
    </Provider>
    , document.getElementById('headTitle'));
render(
    <Provider store={store}>
        <ContentPart />
    </Provider>
    , document.getElementById('contentPart'));
