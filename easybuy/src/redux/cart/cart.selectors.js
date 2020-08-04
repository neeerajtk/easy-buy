import {createSelector} from 'reselect';

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCounr = createSelector(
    [selectCartItems],
    CartItems => cartItems.reduce((accumalayedQuantity,cartItem)=>accumalayedQuantity + cartItem.quantity,
    0
    )
)