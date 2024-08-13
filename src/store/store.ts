import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authenficationSliceReducer from '../reducers/authentication'
import preconditionSliceReducer from '../reducers/precondition'
import cartSliceReducer from '../reducers/cart'


export const store = configureStore({
  reducer: combineReducers({authenficationSliceReducer , preconditionSliceReducer , cartSliceReducer})  
})


// store.subscribe(() => {})
store.subscribe(() => console.log(store.getState()))