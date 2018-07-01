import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducer/RootReducer.js'

ReactDOM.render(
    <Provider store={createStore(reducers)} >
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
