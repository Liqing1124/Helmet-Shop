'use client';

import { motion } from 'framer-motion';
import { Truck, RotateCcw, Shield } from 'lucide-react';
import { getTrustFactors, TrustFactor } from '../lib/data';
import { useState, useEffect } from 'react';

const iconMap = {
    'truck': Truck,
    'refresh-cw': RotateCcw,
    'shield': Shield,
};

export function TrustFactors() {
    const [trustFactors, setTrustFactors] = useState<TrustFactor[]>([]);

    useEffect(() => {
        const fetchTrustFactors = async () => {
            try {
                const data = await getTrustFactors();
                setTrustFactors(data);
            } catch (error) {
                console.error('Error fetching trust factors:', error);
            }
        };

        fetchTrustFactors();
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-8 bg-blue-600 text-white"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
                    {trustFactors.map((factor, index) => {
                        const IconComponent = iconMap[factor.icon as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={factor.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2"
                            >
                                <IconComponent className="w-8 h-8" />
                                <span>{factor.text}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}
