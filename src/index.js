import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/RootReducer.js'
import thunk from 'redux-thunk';

let store = createStore(rootReducer,
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
