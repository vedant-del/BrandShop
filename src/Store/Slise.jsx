import {createSlice} from "@reduxjs/toolkit"

const   cartSlice = createSlice({
    name : "cart",
    initialState:[],
    reducers:{
        add_to_cart(state, action) {
            console.log(action.payload, "pppp")
            state.push(action.payload);
        },

        remove_to_cart(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
    }

})

export const {add_to_cart, remove_to_cart} = cartSlice.actions;
export default cartSlice.reducer;