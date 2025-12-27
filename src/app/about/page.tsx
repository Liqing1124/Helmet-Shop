'use client';

import { motion } from 'framer-motion';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Shield, Users, Award, Heart } from 'lucide-react';

export default function About() {
    const features = [
        {
            icon: Shield,
            title: 'An Toàn Là Trên Hết',
            description: 'Chúng tôi cam kết mang đến những sản phẩm mũ bảo hiểm chất lượng cao, đạt chuẩn an toàn quốc tế, giúp bảo vệ quý khách hàng trên mọi hành trình.'
        },
        {
            icon: Users,
            title: 'Đội Ngũ Chuyên Nghiệp',
            description: 'Đội ngũ kỹ thuật viên giàu kinh nghiệm, tư vấn tận tình và phục vụ chu đáo, luôn đặt lợi ích khách hàng lên hàng đầu.'
        },
        {
            icon: Award,
            title: 'Chất Lượng Đảm Bảo',
            description: 'Tất cả sản phẩm đều được kiểm định nghiêm ngặt, bảo hành dài hạn và chính sách đổi trả linh hoạt.'
        },
        {
            icon: Heart,
            title: 'Yêu Thương Khách Hàng',
            description: 'Mỗi khách hàng là một người bạn, chúng tôi luôn lắng nghe và cải thiện dịch vụ để mang đến trải nghiệm tốt nhất.'
        }
    ];

    const stats = [
        { number: '10+', label: 'Năm Kinh Nghiệm' },
        { number: '50K+', label: 'Khách Hàng Tin Dùng' },
        { number: '100K+', label: 'Sản Phẩm Đã Bán' },
        { number: '4.9/5', label: 'Đánh Giá Trung Bình' }
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Bi Helmet - Nơi an toàn bắt đầu. Chúng tôi chuyên cung cấp các loại mũ bảo hiểm
                        chất lượng cao với dịch vụ tận tâm, mang đến sự bảo vệ tối đa cho quý khách hàng.
                    </p>
                </div>
            </motion.section>

            {/* Story Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Câu Chuyện Của Chúng Tôi</h2>
                        <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                            <p>
                                Thành lập từ năm 2014, Bi Helmet bắt đầu với sứ mệnh đơn giản nhưng đầy ý nghĩa:
                                mang đến sự an toàn cho mọi người trên đường phố Việt Nam.
                            </p>
                            <p>
                                Qua hơn 10 năm phát triển, chúng tôi đã trở thành một trong những cửa hàng mũ bảo hiểm
                                uy tín nhất tại TP.HCM, phục vụ hàng chục nghìn khách hàng với các sản phẩm chất lượng
                                cao từ các thương hiệu nổi tiếng trên thế giới.
                            </p>
                            <p>
                                Không chỉ bán sản phẩm, chúng tôi còn mang đến dịch vụ tư vấn chuyên nghiệp,
                                hỗ trợ kỹ thuật tận tình và cam kết bảo hành dài hạn. Mỗi chiếc mũ bảo hiểm từ
                                Bi Helmet đều là lời hứa về sự an toàn và chất lượng.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Tại Sao Chọn Chúng Tôi?</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Những giá trị cốt lõi giúp chúng tôi trở thành người bạn đồng hành đáng tin cậy
                            của hàng nghìn khách hàng.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Sứ Mệnh Của Chúng Tôi</h2>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
                            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                "Giúp mọi người di chuyển an toàn trên đường phố là sứ mệnh của chúng tôi.
                                Chúng tôi tin rằng, với những sản phẩm chất lượng và dịch vụ tận tâm,
                                chúng ta có thể góp phần làm giảm tai nạn giao thông và mang đến cuộc sống
                                tốt đẹp hơn cho cộng đồng."
                            </p>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                - Đội ngũ Bi Helmet
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
