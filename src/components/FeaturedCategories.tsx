'use client';

import { motion } from 'framer-motion';
import { categories } from '../lib/data';

export function FeaturedCategories() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-16 bg-gray-50 dark:bg-gray-900"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center text-black dark:text-white mb-12"
                >
                    Danh Mục Nổi Bật
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                        >
                            <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-black dark:text-white">{category.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
