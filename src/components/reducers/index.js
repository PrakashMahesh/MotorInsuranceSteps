import loaderReducer from './loaderReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    loader: loaderReducer
});

export default allReducers;