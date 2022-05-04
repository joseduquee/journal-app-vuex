
export const currentAuthState = ( state ) => {
    return state.status
}

export const username = ( state ) => {
    return state.user?.name || ''
}