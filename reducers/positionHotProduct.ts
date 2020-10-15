const initialState = {
    pt: ''
}

const positionHotProduct = (state = initialState, action: any) => {
    switch (action.type) {
        case 'addPosition':
            const newpt = action.payload
            return {
                ...action,
                pt: newpt
            };
        default:
            return state;
    }
};

export default positionHotProduct;
