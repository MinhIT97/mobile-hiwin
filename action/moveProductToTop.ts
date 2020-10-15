export const addProductToHot = (products: []) => {
    return {
        type: 'ADD_PRODUCT',
        payload: products,
    }
}