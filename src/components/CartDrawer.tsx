'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useRouter } from 'next/navigation';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { state, dispatch, totalItems, totalPrice } = useCart();
    const router = useRouter();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay - very subtle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-40"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <h2 className="text-xl font-bold text-black flex items-center">
                                    <ShoppingCart className="w-6 h-6 mr-3" />
                                    Giỏ hàng ({totalItems})
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-4">
                                {state.items.length === 0 ? (
                                    <div className="text-center text-gray-500 py-8 text-lg">
                                        Giỏ hàng trống
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {state.items.map((item) => (
                                            <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 border-b border-gray-200 pb-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 object-cover rounded"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-black text-base">{item.name}</h3>
                                                    <p className="text-base text-gray-500">Size: {item.size}</p>
                                                    <p className="text-base font-semibold text-gray-700">{item.price}</p>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <button
                                                        onClick={() => dispatch({
                                                            type: 'UPDATE_QUANTITY',
                                                            payload: { id: item.id, size: item.size, quantity: item.quantity - 1 }
                                                        })}
                                                        className="p-2 hover:bg-gray-100 rounded"
                                                    >
                                                        <Minus className="w-5 h-5" />
                                                    </button>
                                                    <span className="w-10 text-center text-lg font-semibold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => dispatch({
                                                            type: 'UPDATE_QUANTITY',
                                                            payload: { id: item.id, size: item.size, quantity: item.quantity + 1 }
                                                        })}
                                                        className="p-2 hover:bg-gray-100 rounded"
                                                    >
                                                        <Plus className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => dispatch({
                                                        type: 'REMOVE_ITEM',
                                                        payload: { id: item.id, size: item.size }
                                                    })}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {state.items.length > 0 && (
                                <div className="border-t border-gray-200 p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-xl font-bold text-black">Tổng cộng:</span>
                                        <span className="text-xl font-bold text-black">
                                            {totalPrice.toLocaleString()} VNĐ
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => router.push('/checkout')}
                                        className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                                    >
                                        Thanh toán
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
