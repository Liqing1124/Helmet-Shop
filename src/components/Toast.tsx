'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useCart } from '../contexts/CartContext';

export function Toast() {
    const { state, dispatch } = useCart();

    useEffect(() => {
        if (state.toast.isVisible) {
            const timer = setTimeout(() => {
                dispatch({ type: 'HIDE_TOAST' });
            }, 3000); // Hide after 3 seconds

            return () => clearTimeout(timer);
        }
    }, [state.toast.isVisible, dispatch]);

    return (
        <AnimatePresence>
            {state.toast.isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: 'tween', duration: 0.3 }}
                    className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
                >
                    {state.toast.message}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
