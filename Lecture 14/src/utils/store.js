import navSlice from "./navSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer : {
        menu : navSlice
    }
})

export default store;