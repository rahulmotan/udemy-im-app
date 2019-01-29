import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/rootreducer'
import './index.css';
import App from './App';

let store = createStore(rootReducer);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
