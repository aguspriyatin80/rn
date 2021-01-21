import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "remote-redux-devtools";
import rootReducers from  '../reducers/rootReducer'



const store = createStore (rootReducers,composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
