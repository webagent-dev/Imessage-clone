import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        userData: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state,action) =>{
            state.userData = action.payload
        },
        logout: (state,action) =>{
            state.userData = null
        }
    }
});

export const {
    login, logout
} = userSlice.actions
    export const selectUser = state  => state.user.userData
    export const selectLogout = state  => state.user.userData
export default userSlice.reducer