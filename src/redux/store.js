import { configureStore } from '@reduxjs/toolkit'
//import counterSlice from './counter/counterSlice'
import counterReducer from './counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  },
})