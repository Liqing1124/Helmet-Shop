'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter } from 'lucide-react';
import { navItems, socialLinks } from '../lib/data';

const iconMap = {
    'facebook': Facebook,
    'twitter': Twitter,
};

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 text-white py-12"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Helmet Store</h3>
                        <p className="text-gray-400">Cung cấp mũ bảo hiểm chất lượng cao cho mọi nhu cầu.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Liên kết</h4>
                        <ul className="space-y-2 text-gray-400">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
                        <p className="text-gray-400">Email: info@helmetstore.vn</p>
                        <p className="text-gray-400">Điện thoại: +84 123 456 789</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => {
                                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <IconComponent className="w-6 h-6" />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-700 mt-8 pt-8 text-center"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">&copy; 2025 Helmet Store. Tất cả quyền được bảo lưu.</p>
                        <div className="mt-4 md:mt-0">
                            <input type="email" placeholder="Đăng ký nhận bản tin" className="px-4 py-2 rounded-l-lg text-black" />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                            >
                                Đăng ký
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}
