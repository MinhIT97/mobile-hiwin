export const defaultProduct = (products: {}[]) => {
    return {
        type: 'DEFAULT_PRODUCTS',
        payload: products,
    }
}


export const removeItemDefaultProduct = (products: {}[]) => {
    return {
        type: 'REMOVE_ITEM_DEFAULT_PRODUCTS',
        payload: products,
    }
}