import { createStore, applyMiddleware } from 'redux'
// we need thunk for asynchronous actions
import thunk from 'redux-thunk'
// reducers - in reducers folder, it will automatically look for index.js inside that folder if you don't specify the file
import reducer from './reducers'

// MOST IMPORTANT CODE OR YOUR REDUX IS ALL FOR NOTHING

const store = createStore(reducer, applyMiddleware(thunk))

export default store