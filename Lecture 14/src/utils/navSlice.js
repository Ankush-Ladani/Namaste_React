import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name : "menu",
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu : (state) => {
            state.isMenuOpen = false
        }
    }
})

export const { toggleMenu , closeMenu } = navSlice.actions;
export default navSlice.reducer;

