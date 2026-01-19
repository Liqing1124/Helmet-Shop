'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { getBestSellers, Product } from '../lib/data';
import { useCart } from '../contexts/CartContext';
import { useState, useEffect } from 'react';
import ProductModal from './ProductModal';
import { ProductGridSkeleton } from './Skeleton';

export function BestSellers() {
    const { dispatch } = useCart();
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                const data = await getBestSellers();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching best sellers:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBestSellers();
    }, []);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-16"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center text-black dark:text-white mb-12"
                >
                    Sản Phẩm Bán Chạy
                </motion.h2>
                {isLoading ? (
                    <ProductGridSkeleton />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
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
                                <p className="text-sm text-gray-500 dark:text-gray-400">Nhấn vào hình để xem thêm chi tiết</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </motion.section>
    );
}
