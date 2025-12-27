'use client';

import React, { useState, useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../../contexts/CartContext';

const CheckoutPage = () => {
    const { state, totalItems, totalPrice } = useCart();
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'cod'
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Checkout Data:', formData);
        alert('Đặt hàng thành công! Thông tin đã được lưu vào console.');
    };

    return (
        <div className="min-h-screen bg-white transition-colors">
            <Navigation />

            {/* Cart Summary in Top Left Corner */}
            {isMounted && (
                <div className="fixed top-20 left-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-md max-h-96 overflow-y-auto z-40 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                        <ShoppingCart className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
                        <h3 className="text-xl font-bold text-black dark:text-white" suppressHydrationWarning>
                            Giỏ hàng ({totalItems})
                        </h3>
                    </div>

                    {state.items.length === 0 ? (
                        <p className="text-gray-500 dark:text-gray-400 text-center py-4 text-lg">Giỏ hàng trống</p>
                    ) : (
                        <div className="space-y-4">
                            {state.items.map((item) => (
                                <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-black dark:text-white text-base truncate">{item.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Kích thước: {item.size}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Số lượng: {item.quantity}</p>
                                        <p className="text-base font-semibold text-gray-700 dark:text-gray-300">{item.price}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-black dark:text-white text-lg">Tổng cộng:</span>
                                    <span className="font-bold text-black dark:text-white text-lg" suppressHydrationWarning>
                                        {totalPrice.toLocaleString()} VNĐ
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="container mx-auto px-4 py-8 max-w-2xl">
                <div className="mb-6">
                    <Link
                        href="/products"
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Quay lại sản phẩm
                    </Link>
                </div>
                <h1 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Thanh toán</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Thông tin giao hàng</h2>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Họ và tên *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập họ và tên"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                    Số điện thoại *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập số điện thoại"
                                />
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium mb-2">
                                    Địa chỉ giao hàng *
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập địa chỉ giao hàng"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Phương thức thanh toán</h2>

                        <div className="space-y-3">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cod"
                                    checked={formData.paymentMethod === 'cod'}
                                    onChange={handleChange}
                                    className="mr-3"
                                />
                                <span>Thanh toán khi nhận hàng (COD)</span>
                            </label>

                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="bank"
                                    checked={formData.paymentMethod === 'bank'}
                                    onChange={handleChange}
                                    className="mr-3"
                                />
                                <span>Chuyển khoản ngân hàng</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    >
                        Đặt hàng
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default CheckoutPage;
