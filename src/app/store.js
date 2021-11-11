import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../feature/userSlice'
import chatSlice from '../feature/chatSlice'

const store = configureStore(({
    reducer:{
        user: userSlice,
        chat: chatSlice
    }
}))

export default store 