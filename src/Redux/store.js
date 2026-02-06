import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import productSlice from './Slices/prodSlice'


const reducer= combineReducers({
    prodSlice:productSlice
})

const store= configureStore({
    reducer
})  



export default store;