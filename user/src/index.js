import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux';
import App from './components/app';
import Reducers from './reducers';
import Thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(Thunk)));

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>    
, document.getElementById('root')
);