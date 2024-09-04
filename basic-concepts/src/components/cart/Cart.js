// Cart.js
import React, { useState } from "react";
import CartItem from "../cart-item/CartItem";
import "./Cart.css";

function Cart() {
    let initialCart = [
        {
            id: 1,
            name: 'Product 1',
            image: 'https://via.placeholder.com/150',
            price: 10.0,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'https://via.placeholder.com/150',
            price: 20.0,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Product 3',
            image: 'https://via.placeholder.com/150',
            price: 30.0,
            quantity: 1,
        },
    ];

    const [cart, setCart] = useState(initialCart);

    const handleIncrement = (productId) => {
        setCart((prevCart) =>
            prevCart.map((product) =>
                product.id === productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const handleDecrement = (productId) => {
        setCart((prevCart) =>
            prevCart.map((product) =>
                product.id === productId && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    const totalPrice = cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    const handlePay = () => {
        alert(`Total to pay: $${totalPrice.toFixed(2)}`);
    };

    return (
        <div className='cart'>
            <div className='cart-container'>
                <section className='cart-items'>
                    {cart.map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                        />
                    ))}
                </section>
                <aside className='cart-summary'>
                    <h4>Total</h4>
                    <p>${totalPrice.toFixed(2)}</p>
                    <button className='pay-button' onClick={handlePay}>Pay</button>
                </aside>
            </div>
        </div>
    );
}

export default Cart;