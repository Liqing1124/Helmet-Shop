-- Supabase Database Schema for Helmet Shop

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    sizes TEXT[] NOT NULL,
    category_id INTEGER REFERENCES categories(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    total_amount DECIMAL(10,2) NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    shipping_address TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create order_items table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id),
    product_name TEXT NOT NULL,
    product_price TEXT NOT NULL,
    product_image TEXT NOT NULL,
    size TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create trust_factors table
CREATE TABLE trust_factors (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    icon TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE trust_factors ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on products" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read access on categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access on trust_factors" ON trust_factors FOR SELECT USING (true);

-- Create policies for authenticated users
CREATE POLICY "Allow authenticated users to create orders" ON orders FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow users to view their own orders" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Allow authenticated users to create order items" ON order_items FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Insert sample data
INSERT INTO categories (name, image) VALUES
('Mũ Fullface', 'https://via.placeholder.com/300x200?text=Fullface'),
('Mũ 3/4', 'https://via.placeholder.com/300x200?text=3/4+Helmet'),
('Mũ Xe Đạp', 'https://via.placeholder.com/300x200?text=Bike+Helmet');

INSERT INTO products (name, price, rating, image, description, sizes, category_id) VALUES
('Mũ Fullface Pro', '1.200.000 VNĐ', 5, 'https://via.placeholder.com/250x200?text=Mũ+Fullface+Pro', 'Mũ bảo hiểm fullface chất lượng cao, bảo vệ tối đa cho người lái xe. Thiết kế aerodynamic, thoáng khí tốt.', ARRAY['S', 'M', 'L', 'XL'], 1),
('Mũ 3/4 Sport', '800.000 VNĐ', 4, 'https://via.placeholder.com/250x200?text=Mũ+3/4+Sport', 'Mũ 3/4 thể thao, phù hợp cho các hoạt động ngoài trời. Chống va đập mạnh, nhẹ nhàng và thoải mái.', ARRAY['M', 'L', 'XL'], 2),
('Mũ Xe Đạp Urban', '600.000 VNĐ', 5, 'https://via.placeholder.com/250x200?text=Mũ+Xe+Đạp+Urban', 'Mũ xe đạp dành cho đô thị, thiết kế hiện đại, tích hợp đèn LED và hệ thống thông gió hiệu quả.', ARRAY['S', 'M', 'L'], 3),
('Mũ Fullface Elite', '1.500.000 VNĐ', 5, 'https://via.placeholder.com/250x200?text=Mũ+Fullface+Elite', 'Mũ fullface cao cấp với công nghệ tiên tiến, bảo vệ tối ưu và thiết kế sang trọng.', ARRAY['S', 'M', 'L', 'XL', 'XXL'], 1);

INSERT INTO trust_factors (text, icon) VALUES
('Giao hàng 2h', 'truck'),
('Đổi trả 30 ngày', 'refresh-cw'),
('Bảo hành 2 năm', 'shield');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_trust_factors_updated_at BEFORE UPDATE ON trust_factors FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
