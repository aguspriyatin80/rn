import { combineReducers } from 'redux'
import movieReducers from './movieReducers'
//import {testReducer} from './../screens/UserReviewScreen'


const rootReducers  = combineReducers({
    movieReducers
})

export default rootReducers