import React from 'react'

const CartItem = ({ item: {imageUrl, price, name, quantity }}) => (
  <div className="flex p-2 ">
      <img className="w-1/5" src={imageUrl} alt="item" />
      <div className="item-details p-4	">
          <span className='p-2'>{name}</span>
          <span className='p-2'>{price}</span>
          <span className='p-2'>{quantity} x {price}€</span>
      </div>
  </div>  
)

export default CartItem;