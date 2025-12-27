'use client';

import { Search, ShoppingCart } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { navItems } from '../lib/data';
import { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { CartDrawer } from './CartDrawer';

export function Navigation() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { totalItems } = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <div className="text-2xl font-bold text-black dark:text-white">Helmet Store</div>
                        <div className="hidden md:flex space-x-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                            <Search className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors relative"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {isMounted && totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
