export const changeBackground = (bg: string) => {
    return {
        type: 'CHANGE_BACKGROUND',
        payload: bg,
    }

}
export const removeBackground = (bg: string) => {
    return {
        type: 'REMOVE_BACKGROUND',
        payload: bg,
    }

}