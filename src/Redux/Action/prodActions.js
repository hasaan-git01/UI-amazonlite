import axios from 'axios'
import Apis from '../../Config/Apis'

import {setLoading, setProducts, setProduct} from'../Slices/prodSlice'

const fetchProducts = () => async (dispatch) => {
    dispatch(setLoading())
    try {
        const {data} = await axios.get(Apis.PROD)
        const {allproducts, ok, total} = data
        dispatch(setProducts(allproducts))
    } catch (err) {
        console.log(err.message)
    }
}

const fetchProduct = (id) => async (dispatch) => {
    dispatch(setLoading())
    try {
        const {data} = await axios.get(`${Apis.PROD}/${id}`)
        const {singleproduct, ok} = data
        console.log("API Response:", singleproduct);
        dispatch(setProduct(singleproduct))
    } catch (err) {
        console.log(err.message)
    }
}




export {fetchProducts, fetchProduct}   