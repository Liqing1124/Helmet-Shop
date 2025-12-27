'use client';

import { motion } from 'framer-motion';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add form submission logic here
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            content: 'info@helmetstore.vn',
            description: 'Gửi email cho chúng tôi'
        },
        {
            icon: Phone,
            title: 'Điện thoại',
            content: '+84 123 456 789',
            description: 'Gọi cho chúng tôi'
        },
        {
            icon: MapPin,
            title: 'Địa chỉ',
            content: '123 Đường ABC, Quận 1, TP.HCM',
            description: 'Địa chỉ cửa hàng'
        },
        {
            icon: Clock,
            title: 'Giờ làm việc',
            content: '8:00 - 18:00',
            description: 'Thứ 2 - Chủ nhật'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors">
            <Navigation />

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16"
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Có câu hỏi hoặc cần hỗ trợ? Hãy liên hệ với đội ngũ của chúng tôi.
                        Chúng tôi luôn sẵn sàng giúp đỡ bạn.
                    </p>
                </div>
            </motion.section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{info.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">{info.content}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Gửi Tin Nhắn</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Điền thông tin vào biểu mẫu dưới đây và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                            </p>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Họ và tên *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Nhập họ và tên của bạn"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Nhập địa chỉ email"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    Chủ đề *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="Nhập chủ đề"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    Tin nhắn *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-vertical"
                                    placeholder="Nhập tin nhắn của bạn"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Gửi Tin Nhắn
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
