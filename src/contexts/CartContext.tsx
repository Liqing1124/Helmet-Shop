'use client';

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: string;
    image: string;
    size: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    toast: { message: string; isVisible: boolean };
}

type CartAction =
    | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> & { quantity?: number } }
    | { type: 'REMOVE_ITEM'; payload: { id: number; size: string } }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; size: string; quantity: number } }
    | { type: 'CLEAR_CART' }
    | { type: 'SHOW_TOAST'; payload: string }
    | { type: 'HIDE_TOAST' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.items.find(
                item => item.id === action.payload.id && item.size === action.payload.size
            );
            const quantityToAdd = action.payload.quantity || 1;
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id && item.size === action.payload.size
                            ? { ...item, quantity: item.quantity + quantityToAdd }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: quantityToAdd }],
                };
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(
                    item => !(item.id === action.payload.id && item.size === action.payload.size)
                ),
            };
        case 'UPDATE_QUANTITY':
            if (action.payload.quantity <= 0) {
                return {
                    ...state,
                    items: state.items.filter(
                        item => !(item.id === action.payload.id && item.size === action.payload.size)
                    ),
                };
            }
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id && item.size === action.payload.size
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        case 'CLEAR_CART':
            return { items: [], toast: { message: '', isVisible: false } };
        case 'SHOW_TOAST':
            return {
                ...state,
                toast: { message: action.payload, isVisible: true },
            };
        case 'HIDE_TOAST':
            return {
                ...state,
                toast: { message: '', isVisible: false },
            };
        default:
            return state;
    }
};

const CART_STORAGE_KEY = 'shopping-cart';

const loadCartFromStorage = (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        return [];
    }
};

const saveCartToStorage = (items: CartItem[]): void => {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
    }
};

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
    totalItems: number;
    totalPrice: number;
} | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: loadCartFromStorage(),
        toast: { message: '', isVisible: false }
    });

    // Save cart items to localStorage whenever items change
    useEffect(() => {
        saveCartToStorage(state.items);
    }, [state.items]);

    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.items.reduce((sum, item) => {
        const priceNum = parseFloat(item.price.replace(/[^\d]/g, ''));
        return sum + priceNum * item.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{ state, dispatch, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
