import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./Slise"

const store = configureStore({
    reducer:{
        cart : cartReducer,
    },
})

export default store;