import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import {favoriteReducer} from './favoriteReducer'

const rootReducer = conbineReducers({
    movieReducer
})

export default movieReducer;