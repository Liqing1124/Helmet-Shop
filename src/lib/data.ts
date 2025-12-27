export interface Product {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    description: string;
    sizes: string[];
}

export interface Category {
    id: number;
    name: string;
    image: string;
}

export interface TrustFactor {
    id: number;
    text: string;
    icon: string;
}

export const categories: Category[] = [
    {
        id: 1,
        name: 'Mũ Fullface',
        image: 'https://via.placeholder.com/300x200?text=Fullface'
    },
    {
        id: 2,
        name: 'Mũ 3/4',
        image: 'https://via.placeholder.com/300x200?text=3/4+Helmet'
    },
    {
        id: 3,
        name: 'Mũ Xe Đạp',
        image: 'https://via.placeholder.com/300x200?text=Bike+Helmet'
    }
];

export const bestSellers: Product[] = [
    {
        id: 1,
        name: 'Mũ Fullface Pro',
        price: '1.200.000 VNĐ',
        rating: 5,
        image: 'https://via.placeholder.com/250x200?text=Mũ+Fullface+Pro',
        description: 'Mũ bảo hiểm fullface chất lượng cao, bảo vệ tối đa cho người lái xe. Thiết kế aerodynamic, thoáng khí tốt.',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 2,
        name: 'Mũ 3/4 Sport',
        price: '800.000 VNĐ',
        rating: 4,
        image: 'https://via.placeholder.com/250x200?text=Mũ+3/4+Sport',
        description: 'Mũ 3/4 thể thao, phù hợp cho các hoạt động ngoài trời. Chống va đập mạnh, nhẹ nhàng và thoải mái.',
        sizes: ['M', 'L', 'XL']
    },
    {
        id: 3,
        name: 'Mũ Xe Đạp Urban',
        price: '600.000 VNĐ',
        rating: 5,
        image: 'https://via.placeholder.com/250x200?text=Mũ+Xe+Đạp+Urban',
        description: 'Mũ xe đạp dành cho đô thị, thiết kế hiện đại, tích hợp đèn LED và hệ thống thông gió hiệu quả.',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 4,
        name: 'Mũ Fullface Elite',
        price: '1.500.000 VNĐ',
        rating: 5,
        image: 'https://via.placeholder.com/250x200?text=Mũ+Fullface+Elite',
        description: 'Mũ fullface cao cấp với công nghệ tiên tiến, bảo vệ tối ưu và thiết kế sang trọng.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
];

export const trustFactors: TrustFactor[] = [
    {
        id: 1,
        text: 'Giao hàng 2h',
        icon: 'truck'
    },
    {
        id: 2,
        text: 'Đổi trả 30 ngày',
        icon: 'refresh-cw'
    },
    {
        id: 3,
        text: 'Bảo hành 2 năm',
        icon: 'shield'
    }
];

export const navItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Sản phẩm', href: '/products' },
    { name: 'Thanh toán', href: '/checkout' },
    { name: 'Liên hệ', href: '/contact' }
];

export const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' }
];
