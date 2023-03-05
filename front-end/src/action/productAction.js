import axios from 'axios'

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST-REQUEST' })
    const { data } = await axios.get('http://localhost:8000/api/products')

    dispatch({ type: 'PRODUCT_LIST-SUCCESS', payLoad: data })
  } catch (error) {
    console.log(error)
  }
}

export const productDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_DETAIL-REQUEST' })
    const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

    dispatch({ type: 'PRODUCT_DETAIL-SUCCESS', payLoad: data })
  } catch (error) {
    console.log(error)
  }
}
