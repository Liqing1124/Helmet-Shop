# 🏍️ Bi Helmet - Cửa Hàng Mũ Bảo Hiểm

## 🔥 Supabase Integration

Dự án này đã được tích hợp với **Supabase** - một backend-as-a-service mạnh mẽ để quản lý dữ liệu, xác thực và API thời gian thực.

### 🚀 Tính năng Supabase
- **🗄️ Database**: PostgreSQL database với Row Level Security
- **📦 Real-time**: Cập nhật dữ liệu thời gian thực
- **🔐 Authentication**: Xác thực người dùng (sẵn sàng mở rộng)
- **📊 API**: RESTful API tự động
- **💾 Storage**: Lưu trữ file và hình ảnh

### 📋 Thiết lập Supabase

Để sử dụng đầy đủ tính năng, hãy làm theo hướng dẫn trong [`README-Supabase.md`](README-Supabase.md)

**Các bước nhanh:**
1. Tạo project Supabase tại [supabase.com](https://supabase.com)
2. Cập nhật credentials trong `.env.local`
3. Chạy schema SQL trong Supabase dashboard
4. Khởi động ứng dụng và test

## ✨ Tính năng chính

### 🎯 Tính năng cốt lõi
- **🏠 Trang chủ**: Hero section, danh mục sản phẩm nổi bật, sản phẩm bán chạy
- **🛍️ Sản phẩm**: Danh sách sản phẩm với bộ lọc và tìm kiếm
- **🛒 Giỏ hàng**: Quản lý giỏ hàng với React Context
- **💳 Thanh toán**: Trang thanh toán với form đơn giản
- **📞 Liên hệ**: Form liên hệ hoàn chỉnh với thông tin cửa hàng

### 🎨 Giao diện & Trải nghiệm
- **📱 Responsive**: Tương thích hoàn hảo trên mọi thiết bị
- **🎭 Animations**: Hiệu ứng mượt mà với Framer Motion
- **🇳 Tiếng Việt**: Giao diện hoàn toàn bằng tiếng Việt

### 🛠️ Chức năng kỹ thuật
- **⚡ Performance**: Tối ưu với Next.js App Router
- **🔍 SEO**: Cấu hình SEO cơ bản
- **📧 Form Validation**: Validation form với HTML5 và JavaScript
- **💾 Local Storage**: Lưu trữ dữ liệu giỏ hàng

## 🚀 Công nghệ sử dụng

- **Frontend**: Next.js 16.1.1, React 19.2.3, TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.23.26
- **Icons**: Lucide React 0.562.0
- **State Management**: React Context
- **Deployment**: Vercel/Netlify

## 📦 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18.0 hoặc cao hơn
- npm hoặc yarn hoặc pnpm
- Tài khoản Supabase (để sử dụng database)

### Các bước cài đặt

1. **Clone repository**
   ```bash
   git clone https://github.com/Liqing1124/Helmet-Shop.git
   cd Helmet-Shop
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   # hoặc
   yarn install
   # hoặc
   pnpm install
   ```

3. **Thiết lập Supabase** (theo hướng dẫn chi tiết trong [`README-Supabase.md`](README-Supabase.md))
   ```bash
   npm run setup:supabase
   ```

4. **Chạy development server**
   ```bash
   npm run dev
   # hoặc
   yarn dev
   # hoặc
   pnpm dev
   ```

5. **Mở trình duyệt**
   ```
   http://localhost:3000
   ```

## 📁 Cấu trúc dự án

```
helmet-shop/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── contact/       # Trang liên hệ
│   │   ├── products/      # Trang sản phẩm
│   │   ├── checkout/      # Trang thanh toán
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Trang chủ
│   ├── components/        # React components
│   │   ├── Navigation.tsx # Menu điều hướng
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Footer.tsx     # Footer
│   │   ├── CartDrawer.tsx # Giỏ hàng
│   │   └── ...
│   ├── contexts/          # React contexts
│   │   └── CartContext.tsx
│   └── lib/               # Utilities & data
│       └── data.ts        # Static data
├── package.json
├── tailwind.config.js
├── next.config.ts
└── README.md
```
