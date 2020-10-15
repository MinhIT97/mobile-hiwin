const initialState = {
    bg: ''
}

const changeBackgroundReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CHANGE_BACKGROUND':
            const newBg = action.payload
            return {
                ...action,
                bg: newBg
            };
        case 'REMOVE_BACKGROUND':
            const newBgs = action.payload
            return {
                ...action,
                bg: newBgs
            };
        default:
            return state;
    }
};

export default changeBackgroundReducer;
