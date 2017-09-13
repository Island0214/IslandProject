//main.js
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import style from './Component/main.css';//使用require导入css文件
import 'antd/dist/antd.less';

import React from 'react';
import {render} from 'react-dom';
import MyNav from './Component/nav.js';
import MainPart from './Component/mainPart.js';
import Panel from './Component/panel.js';


// import 'bootstrap/dist/css/bootstrap.css'
// import 'node_modules/bootstrap/dist/css/bootstrap.css'

// render(<Greeter />, document.getElementById('root'));
render(<MyNav />, document.getElementById('nav'));
render(<MainPart />, document.getElementById('panelPart'));
render(<p className={style.titleP}>ISLAND<br/>PROJECT</p>, document.getElementById('headTitle'));
