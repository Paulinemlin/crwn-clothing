import React from 'react'

import {connect} from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/panier.svg'


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="
        relative cart-icon 
        flex flex-col items-center"
        onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span className='absolute pt-3 text-white font-bold'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon); 