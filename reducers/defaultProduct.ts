const initialState = {
    productList: []
}

const defaultProduct = (state = initialState, action: any) => {
    switch (action.type) {
        case 'DEFAULT_PRODUCTS':
            const newProducts = action.payload
            return {
                ...action,
                productList: newProducts
            };
        case 'REMOVE_ITEM_DEFAULT_PRODUCTS':
            const newRemoveProduct = action.payload
            return {
                ...action,
                productList: newRemoveProduct
            };
        default:
            return state;
    }
};

export default defaultProduct;
