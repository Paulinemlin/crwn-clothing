import React from 'react'

import CustomButton from '../custom-button/custom-button.component'


const CartDropDown = () => (
    <div className="cart-dropdown absolute top-14 right-0">
        <div className="cart-items">
            <CustomButton>Go to checkout</CustomButton>
        </div>
    </div>
)

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// })


export default CartDropDown; 