
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './App/index.js';

// 初始化
renderWithHotReload(App);

//热更新
if(module.hot){
    module.hot.accept('./App',()=>{
        const App = require('./App').default;
        renderWithHotReload(App);
    })
}

function renderWithHotReload(App){
    ReactDom.render(
        <AppContainer>           
            <App/>             
        </AppContainer>,
        document.getElementById('app')
    )
}


