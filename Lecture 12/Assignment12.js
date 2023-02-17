// 1. useContext vs Redux
// ? In useContext , we made context for different variables or states so it will be more complex when our app scales up. So , for that we introduced redux in which we have made a global store from which we handle all states using reducers , slices , dispatchers and selectors.

// 2. Advantage of using Redux Toolkit over Redux.
// ? 1. Easy to configure
// ? 2. less packages
// ? 3. less code

// 3. Explain Dispatcher
// ? When we want to interact with store we have to call a reducer function which will be called by a some button in any of the components , so this event will dispatches an action which will be associated to specific reducer function and it will do it's own job.

// 4. Explain Reducer
// ? Reducer is just a normal function which consist of different actions which are to be called by some dispatchers.

// 5. Explain Slice
// ? Slice is just a global state of any variable which can be accessed by all the components of whole app.

// 6. Explain Selector
// ? When we want to read a state from store we use a hook called useSelector which allows to read any state from store.

// 7. Explain createSlice and configuration it takes.

import { createSlice } from "@reduxjs/toolkit";

const randomSlice = createSlice({
  name: "Random",
  initialState: {
    // Any initial value or state or variable you want
    anyState: [],
  },
  reducers : {
    // Define actions or reducer functions here
    addItem : (state , actions) {
        // Code your logic here
    }
  }
});

export const {addItem} = randomSlice.actions;
export default randomSlice.reducer;
