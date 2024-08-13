import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authenficationSliceReducer from '../reducers/authentication'
import preconditionSliceReducer from '../reducers/precondition'


export const store = configureStore({
  reducer: combineReducers({authenficationSliceReducer , preconditionSliceReducer})  
})


store.subscribe(() => {})
// store.subscribe(() => console.log(store.getState()))