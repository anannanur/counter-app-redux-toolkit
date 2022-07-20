import { configureStore } from "@reduxjs/toolkit/dist/configureStore"
import counterReducer from "../features/counter/counterSlice"



const store = configureStore({
    reducer : {
        counter : counterReducer,
        

    }
})

export default store;