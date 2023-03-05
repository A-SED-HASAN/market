export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST-REQUEST':
      return { loading: true, products: [] }

    case 'PRODUCT_LIST-SUCCESS':
      return { loading: false, products: action.payLoad }

    default:
      return state
  }
}

export const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAIL-REQUEST':
      return { loading: true, ...state }

    case 'PRODUCT_DETAIL-SUCCESS':
      return { loading: false, product: action.payLoad }

    default:
      return state
  }
}
