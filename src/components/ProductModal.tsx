'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    rating: number;
    description: string;
    sizes: string[];
}

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);
    const { dispatch } = useCart();

    // Size ranges mapping
    const sizeRanges: { [key: string]: string } = {
        'S': '53 - 56 cm',
        'M': '57 - 58 cm',
        'L': '59 - 60 cm',
        'XL': '61 - 62 cm',
        'XXL': '63 - 64 cm'
    };

    // Reset quantity when product changes
    React.useEffect(() => {
        setQuantity(1);
        setSelectedSize('');
    }, [product]);

    if (!product) return null;

    const handleAddToCart = () => {
        if (selectedSize) {
            dispatch({
                type: 'ADD_ITEM',
                payload: {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    size: selectedSize,
                    quantity: quantity,
                },
            });
            dispatch({ type: 'SHOW_TOAST', payload: 'Đã thêm vào giỏ hàng!' });
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-end p-4">
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pt-0">
                            <div>
                                <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-black dark:text-white mb-4">{product.name}</h1>
                                <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">{product.price}</p>
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                        />
                                    ))}
                                    <span className="ml-2 text-gray-600 dark:text-gray-300">({product.rating}/5)</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-200 mb-6">{product.description}</p>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Chọn Kích Thước</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {product.sizes.map(size => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`p-3 border rounded-lg text-center transition-colors ${selectedSize === size
                                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                                                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                                                    }`}
                                            >
                                                <div className="text-sm text-gray-600 dark:text-gray-400">{sizeRanges[size]}</div>
                                                <div className="font-semibold text-black dark:text-white">{size}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Số Lượng</label>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => {
                                                const value = parseInt(e.target.value);
                                                if (!isNaN(value) && value >= 1) {
                                                    setQuantity(value);
                                                }
                                            }}
                                            className="w-20 h-10 text-center border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                                    disabled={!selectedSize}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
