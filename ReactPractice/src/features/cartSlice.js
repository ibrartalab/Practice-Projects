import { createSlice } from '@reduxjs/toolkit'
import { cartData } from '../data'

const initialState = {
    products: cartData,
    amount: 0,
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseAmount: (state, { payload }) => {
            const item = state.products.find(item => item.name === payload.name);
            item.amount++;
        },
        decreaseAmount: (state, { payload }) => {
            const item = state.products.find(item => item.name === payload.name);
            item.amount--;
        },
        removeProducts:(state,{payload}) => {
           state.products =  state.products.filter((item) => item.name !== payload.name)
        },
        updateTotal:(state) => {
            let amount = 0;
            let total = 0;
            state.products.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
        
    }
})

export const { increaseAmount ,decreaseAmount,removeProducts,updateTotal} = cartSlice.actions
export default cartSlice.reducer