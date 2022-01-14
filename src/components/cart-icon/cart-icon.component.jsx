import React from 'react'

import {connect} from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/panier.svg'


const CartIcon = ({toggleCartHidden}) => (
    <div className="
        relative cart-icon 
        flex flex-col items-center"
        onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span className='absolute pt-3 text-white font-bold'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(
    null, 
    mapDispatchToProps
)(CartIcon); 