import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading : false,
    error: null,
    products:[],
    product:{},
   
}

const productSclice = createSlice({
        name: "products",
        initialState,
        reducers:{
            setLoading: (state) => {
                state.loading=true
            },
            setProducts:(state, {payload}) => {
                state.products = payload
                state.loading = false
            },
             setProduct:(state, {payload}) => {
                state.product = payload
                state.loading = false
            }
        }
})




export const {setLoading, setProducts, setProduct} = productSclice.actions
export default productSclice.reducer



