import navSlice from "./navSlice";
import searchSlice from "./searchSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer : {
        menu : navSlice,
        search : searchSlice
    }
})

export default store;