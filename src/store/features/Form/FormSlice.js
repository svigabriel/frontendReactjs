import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    module: 'React Mod 7',
    username: '',
    email: '',
    password: 'mod7USIP-SilviaVigabriel',
};

const formSlice = createSlice({
    name: 'form', // El name debe se el mismo del form
    initialState,
    reducers: {
        setModule: (state, action) => {
            state.module = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const { setModule, setUsername, setEmail, setPassword } = formSlice.actions;
export default formSlice.reducer;
export { initialState };