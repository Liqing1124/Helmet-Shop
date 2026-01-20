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
            console.error('Error fetching categories from Supabase:', {
                message: error.message || 'No error message',
                code: error.code || 'No error code',
                details: error.details || 'No details',
                hint: error.hint || 'No hint',
                fullError: error
            });
            return [];
        }

        return data || [];
    } catch (error) {
        // Handle different types of errors
        if (error instanceof Error) {
            console.error('Error fetching categories:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
        } else if (typeof error === 'object' && error !== null) {
            console.error('Error fetching categories:', JSON.stringify(error, null, 2));
        } else {
            console.error('Error fetching categories:', String(error));
        }
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
            console.error('Error fetching products from Supabase:', {
                message: error.message || 'No error message',
                code: error.code || 'No error code',
                details: error.details || 'No details',
                hint: error.hint || 'No hint',
                fullError: error
            });
            return [];
        }

        return data || [];
    } catch (error) {
        // Handle different types of errors
        if (error instanceof Error) {
            console.error('Error fetching products:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
        } else if (typeof error === 'object' && error !== null) {
            console.error('Error fetching products:', JSON.stringify(error, null, 2));
        } else {
            console.error('Error fetching products:', String(error));
        }
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
            console.error('Error fetching best sellers from Supabase:', {
                message: error.message || 'No error message',
                code: error.code || 'No error code',
                details: error.details || 'No details',
                hint: error.hint || 'No hint',
                fullError: error
            });
            return [];
        }

        return data || [];
    } catch (error) {
        // Handle different types of errors
        if (error instanceof Error) {
            console.error('Error fetching best sellers:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
        } else if (typeof error === 'object' && error !== null) {
            console.error('Error fetching best sellers:', JSON.stringify(error, null, 2));
        } else {
            console.error('Error fetching best sellers:', String(error));
        }
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
            console.error('Error fetching trust factors from Supabase:', {
                message: error.message || 'No error message',
                code: error.code || 'No error code',
                details: error.details || 'No details',
                hint: error.hint || 'No hint',
                fullError: error
            });
            return [];
        }

        return data || [];
    } catch (error) {
        // Handle different types of errors
        if (error instanceof Error) {
            console.error('Error fetching trust factors:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
        } else if (typeof error === 'object' && error !== null) {
            console.error('Error fetching trust factors:', JSON.stringify(error, null, 2));
        } else {
            console.error('Error fetching trust factors:', String(error));
        }
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
            console.error('Error creating order from Supabase:', {
                message: orderError.message || 'No error message',
                code: orderError.code || 'No error code',
                details: orderError.details || 'No details',
                hint: orderError.hint || 'No hint',
                fullError: orderError
            });
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
            console.error('Error creating order items from Supabase:', {
                message: itemsError.message || 'No error message',
                code: itemsError.code || 'No error code',
                details: itemsError.details || 'No details',
                hint: itemsError.hint || 'No hint',
                fullError: itemsError
            });
            // Note: In a production app, you might want to rollback the order here
            return null;
        }

        return order;
    } catch (error) {
        // Handle different types of errors
        if (error instanceof Error) {
            console.error('Error creating order:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
        } else if (typeof error === 'object' && error !== null) {
            console.error('Error creating order:', JSON.stringify(error, null, 2));
        } else {
            console.error('Error creating order:', String(error));
        }
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
            console.error('Error fetching user orders from Supabase:', {
                message: error.message || 'No error message',
                code: error.code || 'No error code',
                details: error.details || 'No details',
                hint: error.hint || 'No hint',
                fullError: error
            });
            return [];
        }

        return data || [];
    } catch (error) {
        // Handle different types of errors
        if (error instanceof Error) {
            console.error('Error fetching user orders:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
        } else if (typeof error === 'object' && error !== null) {
            console.error('Error fetching user orders:', JSON.stringify(error, null, 2));
        } else {
            console.error('Error fetching user orders:', String(error));
        }
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
