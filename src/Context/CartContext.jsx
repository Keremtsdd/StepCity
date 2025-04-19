import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartReady, setIsCartReady] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
        setIsCartReady(true);
    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } else {
            localStorage.removeItem("cartItems");
        }
    }, [cartItems]);

    const addToCart = (item) => {
        const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id && cartItem.size === item.size);

        if (isItemInCart) {
            alert('Bu ürün zaten sepette!');
            return;
        }

        setCartItems(prev => [
            ...prev,
            {
                ...item,
                shopierLink: item.shopierLink || item.ShopierLink || null,
            }
        ]);
    };


    const removeFromCart = (id, size) => {
        setCartItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, addToCart, isCartReady }}>
            {children}
        </CartContext.Provider>
    );
};
