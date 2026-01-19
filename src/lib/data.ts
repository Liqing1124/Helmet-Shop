import { supabase } from './supabase';

export interface Product {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    description: string;
    sizes: string[];
    category_id?: number;
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

export interface Order {
    id: number;
    user_id?: string;
    total_amount: number;
    status: string;
    customer_name: string;
    customer_email: string;
    customer_phone?: string;
    shipping_address: string;
    created_at: string;
    order_items?: OrderItem[];
}

export interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    product_name: string;
    product_price: string;
    product_image: string;
    size: string;
    quantity: number;
}

// Fetch categories from Supabase
export async function getCategories(): Promise<Category[]> {
    try {
        const { data, error } = await supabase
            .from('categories')
            .select('*')
            .order('id');

        if (error) {
            console.error('Error fetching categories:', error);
            return [];
        }

        return data || [];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

// Fetch products from Supabase
export async function getProducts(): Promise<Product[]> {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('id');

        if (error) {
            console.error('Error fetching products:', error);
            return [];
        }

        return data || [];
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Fetch best sellers (products with rating >= 4)
export async function getBestSellers(): Promise<Product[]> {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .gte('rating', 4)
            .order('rating', { ascending: false })
            .limit(4);

        if (error) {
            console.error('Error fetching best sellers:', error);
            return [];
        }

        return data || [];
    } catch (error) {
        console.error('Error fetching best sellers:', error);
        return [];
    }
}

// Fetch trust factors from Supabase
export async function getTrustFactors(): Promise<TrustFactor[]> {
    try {
        const { data, error } = await supabase
            .from('trust_factors')
            .select('*')
            .order('id');

        if (error) {
            console.error('Error fetching trust factors:', error);
            return [];
        }

        return data || [];
    } catch (error) {
        console.error('Error fetching trust factors:', error);
        return [];
    }
}

// Create a new order
export async function createOrder(orderData: {
    user_id?: string;
    total_amount: number;
    customer_name: string;
    customer_email: string;
    customer_phone?: string;
    shipping_address: string;
    items: Array<{
        product_id: number;
        product_name: string;
        product_price: string;
        product_image: string;
        size: string;
        quantity: number;
    }>;
}): Promise<Order | null> {
    try {
        // Create the order
        const { data: order, error: orderError } = await supabase
            .from('orders')
            .insert({
                user_id: orderData.user_id,
                total_amount: orderData.total_amount,
                customer_name: orderData.customer_name,
                customer_email: orderData.customer_email,
                customer_phone: orderData.customer_phone,
                shipping_address: orderData.shipping_address,
            })
            .select()
            .single();

        if (orderError) {
            console.error('Error creating order:', orderError);
            return null;
        }

        // Create order items
        const orderItems = orderData.items.map(item => ({
            order_id: order.id,
            product_id: item.product_id,
            product_name: item.product_name,
            product_price: item.product_price,
            product_image: item.product_image,
            size: item.size,
            quantity: item.quantity,
        }));

        const { error: itemsError } = await supabase
            .from('order_items')
            .insert(orderItems);

        if (itemsError) {
            console.error('Error creating order items:', itemsError);
            // Note: In a production app, you might want to rollback the order here
            return null;
        }

        return order;
    } catch (error) {
        console.error('Error creating order:', error);
        return null;
    }
}

// Get orders for a user
export async function getUserOrders(userId: string): Promise<Order[]> {
    try {
        const { data, error } = await supabase
            .from('orders')
            .select(`
                *,
                order_items (*)
            `)
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching user orders:', error);
            return [];
        }

        return data || [];
    } catch (error) {
        console.error('Error fetching user orders:', error);
        return [];
    }
}

export const navItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Sản phẩm', href: '/products' },
    { name: 'Thanh toán', href: '/checkout' },
    { name: 'Về chúng tôi', href: '/about' }
];

export const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' }
];
