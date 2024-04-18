import { ADD_TO_CART, REMOVE_ITEM, INCREASE, DECREASE, CHECKOUT, CLEAR } from "./CartTypes"

export const sumItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    let itemCount = cartItems.reduce(
        (total, product) => total + product.quantity,0
    )
    let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
    return {itemCount, total}
}

const CartReducer = ( state, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            if (!state.cartItems.find((item) => item._id === action.payload._id)) {
                state.cartItems.push({
                  ...action.payload,
                  quantity: 1,
                });
            }
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems],
              }
        case REMOVE_ITEM:
            return {
                ...state,
                ...sumItems(state.cartItems.filter((item) => item._id !== action.payload._id)),
                cartItems: [
                    ...state.cartItems.filter((item) => item._id !== action.payload._id)
                ],
            }
        case INCREASE:
            state.cartItems[state.cartItems.findIndex((item) => item._id === action.payload._id)].quantity++;
            return {
                ...state,
                cartItems: [...state.cartItems],
            }
        case DECREASE:
            state.cartItems[state.cartItems.findIndex((item) => item._id === action.payload._id)].quantity--;
            return {
                ...state,
                cartItems: [...state.cartItems],
            }
        case CHECKOUT:
            return {
                cartItems:[],
                checkout: true,
                ...sumItems([]),
            }
        case CLEAR:
            return {
                cartItems:[],
                ...sumItems([]),
            };

        default:
            return state;
    }
}
export default CartReducer






// const CartReducer = ( state, action) => { 
//     switch(action.type) {
//         case ADD_TO_CART:
//             if(!state.cartItems.find((item) => item.product._id === action.payload.product._id)) {
//                 state.cartItems.push({
//                     ...action.payload,
//                     quantity:1
//                 })
//             }
//     }
// }