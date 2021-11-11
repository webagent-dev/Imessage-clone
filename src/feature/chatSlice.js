import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chatId: null,
    chatName: null,
    chatInfo: null
}

const chatSlice = createSlice({
    name: 'chat',
    initialState, 
    reducers: {
        setChat: (state, action) => {
            state.chatId = action.payload.chatId
            state.chatName = action.payload.chatName
        },
       setInfo: (state, action) => {
           state.chatInfo = action.payload
       }
    }
});

export const {
    setChat,
    setInfo
} = chatSlice.actions
export const selectChatId = state => state.chat.chatId
export const selectChatName = state => state.chat.chatName
export const selectInfo = state => state.chat.chatInfo

export default chatSlice.reducer