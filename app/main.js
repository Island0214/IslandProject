//main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Component/greeter.js';
import MyNav from './Component/nav.js';

import './Component/main.css';//使用require导入css文件

// render(<Greeter />, document.getElementById('root'));
render(<MyNav />, document.getElementById('nav'));
