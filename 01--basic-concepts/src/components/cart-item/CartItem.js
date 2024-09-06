import React from "react";
import "./CartItem.css";

function CartItem({ product, onIncrement, onDecrement }) {
    return (
        <div className='cart-item'>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <div className='quantity-controls'>
                <button onClick={() => onDecrement(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => onIncrement(product.id)}>+</button>
            </div>
            <p>${(product.price * product.quantity).toFixed(2)}</p>
        </div>
    );
}

export default CartItem;
