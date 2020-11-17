import {combineReducers} from 'redux';
import authreducer from './authreducer';
import {reducer} from 'redux-form';
import streamsReducer from './streamsReducers';

export default combineReducers({
    auth : authreducer,
    form : reducer,
    streams :streamsReducer
})