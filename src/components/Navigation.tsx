'use client';

import { Search, ShoppingCart } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { navItems, bestSellers, Product } from '../lib/data';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../contexts/CartContext';
import { CartDrawer } from './CartDrawer';
import { useRouter } from 'next/navigation';

export function Navigation() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const { totalItems } = useCart();
    const router = useRouter();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setSearchResults([]);
            setIsSearchOpen(false);
            return;
        }

        const filtered = bestSellers.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtered);
        setIsSearchOpen(true);
    };

    const handleProductSelect = (product: Product) => {
        setIsSearchOpen(false);
        setSearchQuery('');
        router.push(`/products#product-${product.id}`);
        // Scroll to product after navigation
        setTimeout(() => {
            const element = document.getElementById(`product-${product.id}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchResults.length > 0) {
            handleProductSelect(searchResults[0]);
        } else {
            router.push('/products');
        }
    };

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
                        <div className="relative" ref={searchRef}>
                            <form onSubmit={handleSearchSubmit} className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="px-4 py-2 w-64 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="ml-2 p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                            </form>

                            {isSearchOpen && searchResults.length > 0 && (
                                <div className="absolute top-full mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                                    {searchResults.map((product) => (
                                        <div
                                            key={product.id}
                                            onClick={() => handleProductSelect(product)}
                                            className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-12 h-12 object-cover rounded mr-3"
                                            />
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-black dark:text-white">{product.name}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{product.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {isSearchOpen && searchResults.length === 0 && searchQuery.trim() !== '' && (
                                <div className="absolute top-full mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 p-4 text-center">
                                    <p className="text-gray-600 dark:text-gray-400">Không tìm thấy sản phẩm nào</p>
                                </div>
                            )}
                        </div>

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
