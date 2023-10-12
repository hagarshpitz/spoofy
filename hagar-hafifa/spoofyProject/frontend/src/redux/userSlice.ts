import { createSlice } from '@reduxjs/toolkit';
import type, { PayloadAction } from '@reduxjs/toolkit';
import User from '../types/User';

interface UserState {
    currentUser: User;
};

const initialState: UserState = {
    currentUser: {
        id: -1,
        firstName: '',
        lastName: ''
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<{user: User}>) => {
            state.currentUser = action.payload.user;
        },
        resetCurrentUser: (state) => {
            state.currentUser = {
                id: -1,
                firstName: '',
                lastName: ''
            }
        }
    },
})

export const { setCurrentUser, resetCurrentUser } = userSlice.actions
export default userSlice.reducer