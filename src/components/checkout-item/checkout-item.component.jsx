import React from 'react';

const CheckoutItem = ({ cartItem: {name, imageUrl, price, quantity}})=> (
    <div className='checkout-item flex items-center mb-2 p-2'>
       <div className="w-1/6 image-container">
           <img src={imageUrl} alt="" />
       </div>
       <span className="p-2 name">{name}</span>
       <span className="p-2 quantity">{quantity}</span>
       <span className="p-2 price">{price}</span>
       <span className="p-2 remove-button">&#10005;</span>
    </div>
)

export default CheckoutItem;