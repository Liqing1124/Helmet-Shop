# Helmet Shop - Supabase Integration Guide

This guide will help you set up Supabase for the Helmet Shop project.

## Prerequisites

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project in Supabase

## Setup Instructions

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Fill in your project details:
   - Name: `helmet-shop` (or any name you prefer)
   - Database Password: Choose a secure password
   - Region: Select the closest region to your users
4. Click "Create new project"

### 2. Get Supabase Credentials

After your project is created (this may take a few minutes):

1. Go to your project dashboard
2. Click on "Settings" in the left sidebar
3. Click on "API"
4. Copy the following values:
   - Project URL
   - Project API keys (anon/public key)

### 3. Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Set Up Database Schema

1. In your Supabase dashboard, go to "SQL Editor" in the left sidebar
2. Copy and paste the contents of `supabase-schema.sql` file
3. Click "Run" to execute the SQL script

This will create:
- `products` table with sample helmet data
- `categories` table with helmet categories
- `orders` table for storing customer orders
- `order_items` table for order details
- `trust_factors` table for trust indicators
- Row Level Security policies
- Sample data

### 5. Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Visit `http://localhost:3000` to see your application
3. Try browsing products and making an order to test the Supabase integration

## Features Now Available

### Database-Driven Content
- Products are now stored in Supabase and fetched dynamically
- Categories are loaded from the database
- Trust factors are managed in Supabase

### Order Management
- Customer orders are saved to Supabase
- Order details include customer information and items
- Order tracking with unique order IDs

### Data Structure

#### Products Table
- id: Unique identifier
- name: Product name
- price: Product price (formatted string)
- rating: Product rating (1-5)
- image: Product image URL
- description: Product description
- sizes: Available sizes (array)
- category_id: Reference to categories table

#### Orders Table
- id: Unique order identifier
- user_id: User ID (for authenticated users)
- total_amount: Order total
- status: Order status (pending, processing, completed, etc.)
- customer_name: Customer name
- customer_email: Customer email
- customer_phone: Customer phone
- shipping_address: Shipping address
- created_at: Order creation timestamp

#### Order Items Table
- id: Unique item identifier
- order_id: Reference to orders table
- product_id: Reference to products table
- product_name: Product name at time of order
- product_price: Product price at time of order
- product_image: Product image at time of order
- size: Selected size
- quantity: Ordered quantity

## Next Steps

### Authentication (Optional)
To add user authentication:

1. Enable authentication in your Supabase project
2. Add authentication components to handle login/signup
3. Update the order creation to associate orders with authenticated users

### Cart Persistence (Optional)
To persist cart data in the database:

1. Create a `cart_items` table
2. Update the CartContext to save/load cart items from Supabase
3. Associate cart with user sessions

### Admin Panel (Optional)
Create an admin interface to:
- Manage products and categories
- View and update orders
- Analytics and reporting

## Troubleshooting

### Common Issues

1. **Environment variables not loading**: Make sure `.env.local` is in your project root and restart your dev server.

2. **Database connection errors**: Check that your Supabase URL and API key are correct.

3. **Row Level Security errors**: Make sure the RLS policies are properly set up in your Supabase project.

4. **Data not showing**: Verify that the SQL schema was executed successfully and sample data was inserted.

### Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your Supabase project settings
3. Ensure all environment variables are set correctly
4. Check the Supabase dashboard for any service issues

## Security Notes

- The anon key is safe to use in client-side code
- Row Level Security is enabled to protect user data
- Never expose your service role key in client-side code
