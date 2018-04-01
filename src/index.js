

import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './App';

// 初始化
renderWithHotReload(App);

//热更新
// console.log('module',module)
if(module.hot){
    module.hot.accept('./App',()=>{
        const App = require('./App').default;
        renderWithHotReload(App);
    })

}

function renderWithHotReload(RootElement){
    ReactDom.render(
        <AppContainer>           
            {RootElement}             
        </AppContainer>,
        document.getElementById('app')
    )
}


