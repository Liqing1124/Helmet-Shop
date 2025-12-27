'use client';

import { motion } from 'framer-motion';

export function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20"
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-1/2 mb-8 md:mb-0"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Bảo vệ hành trình của bạn với phong cách riêng
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed">
                        Khám phá bộ sưu tập mũ bảo hiểm chất lượng cao, mang lại sự an toàn tối đa và phong cách hiện đại.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                        Mua ngay
                    </motion.button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:w-1/2"
                >
                    <img
                        src="https://via.placeholder.com/600x400?text=Fullface+Helmet"
                        alt="Fullface Helmet"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
