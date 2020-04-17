//combines all application reducers

import {combineReducers} from 'redux'
import dataReducer from './dataReducer';


export default combineReducers({
    dataReducer: dataReducer
})