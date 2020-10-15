const initialState = {
    products: []
}

const moveProductToHot = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const newProduct = action.payload
            return {
                ...action,
                products: newProduct
            };
        default:
            return state;
    }
};

export default moveProductToHot;
