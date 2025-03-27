import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import {favoriteReducer} from './favoriteReducer'

const rootReducer = combineReducers({
    movieReducer
})

export default movieReducer;