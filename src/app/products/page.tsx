'use client';

import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { bestSellers } from '../../lib/data';
import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';
import ProductModal from '../../components/ProductModal';

function ProductsSection() {
    const { dispatch } = useCart();
    const [selectedProduct, setSelectedProduct] = useState<typeof bestSellers[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProductClick = (product: typeof bestSellers[0]) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleAddToCart = (product: typeof bestSellers[0]) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: product.sizes[0], // Default to first size
            },
        });
        dispatch({ type: 'SHOW_TOAST', payload: 'Đã thêm vào giỏ hàng!' });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-16"
        >
            <div className="container mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-bold text-center text-black dark:text-white mb-12"
                >
                    Tất Cả Sản Phẩm
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestSellers.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
                            onClick={() => handleProductClick(product)}
                        >
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{product.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">{product.price}</p>
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <motion.button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleAddToCart(product);
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Thêm vào giỏ
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </motion.section>
    );
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors">
            <Navigation />
            <ProductsSection />
            <Footer />
        </div>
    );
}
