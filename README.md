# 🏍️ Bi Helmet - Cửa Hàng Mũ Bảo Hiểm

## 🔥 Supabase Integration

Dự án này đã được tích hợp với **Supabase** - một backend-as-a-service mạnh mẽ để quản lý dữ liệu, xác thực và API thời gian thực.

### 🚀 Tính năng Supabase
- **🗄️ Database**: PostgreSQL database với Row Level Security (RLS)
- **📦 Real-time**: Cập nhật dữ liệu thời gian thực
- **🔐 Authentication**: Xác thực người dùng (sẵn sàng mở rộng)
- **📊 API**: RESTful API tự động
- **💾 Storage**: Lưu trữ file và hình ảnh
- **⚡ Performance**: Tối ưu với Supabase Edge Functions

### 📋 Thiết lập Supabase

Để sử dụng đầy đủ tính năng, hãy làm theo hướng dẫn chi tiết trong [`README-Supabase.md`](README-Supabase.md)

**Các bước nhanh:**
1. Tạo project Supabase tại [supabase.com](https://supabase.com)
2. Cập nhật credentials trong `.env.local`
3. Chạy schema SQL trong Supabase dashboard
4. Khởi động ứng dụng và test

### 🛠️ Cài đặt nhanh với Script

Sử dụng script setup tích hợp sẵn:

```bash
npm run setup:supabase
```

Script này sẽ cung cấp hướng dẫn chi tiết và liệt kê các file cần thiết lập.

### 📊 Database Schema

Dự án sử dụng 5 bảng chính trong Supabase:

- **categories**: Danh mục sản phẩm (Mũ Fullface, Mũ 3/4, Mũ Xe Đạp)
- **products**: Thông tin sản phẩm với hình ảnh, giá, rating, kích thước
- **orders**: Đơn hàng của khách hàng với thông tin liên hệ
- **order_items**: Chi tiết sản phẩm trong đơn hàng
- **trust_factors**: Các yếu tố tin cậy (Giao hàng 2h, Đổi trả 30 ngày, Bảo hành 2 năm)

Xem chi tiết trong [`supabase-schema.sql`](supabase-schema.sql)

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

### Frontend
- **Next.js**: 16.1.1 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5
- **State Management**: React Context

### Styling & Animations
- **Tailwind CSS**: v4
- **Framer Motion**: 12.23.26
- **Lucide React**: 0.562.0 (Icons)

### Backend & Database
- **Supabase**: PostgreSQL database với Row Level Security
- **Supabase JS Client**: 2.90.1

### Deployment
- **Vercel**: Khuyến khích cho Next.js
- **Netlify**: Hỗ trợ thay thế

### Development Tools
- **ESLint**: Linting và code quality
- **TypeScript**: Type safety
- **PostCSS**: CSS processing

## 📦 Cài đặt và chạy

### Yêu cầu hệ thống
- **Node.js**: 18.0 hoặc cao hơn (khuyến khích Node.js 20+)
- **Package Manager**: npm, yarn, hoặc pnpm
- **Tài khoản Supabase**: Bắt buộc để sử dụng database
- **Git**: Để clone repository

### Các bước cài đặt chi tiết

#### 1. Clone repository
```bash
git clone https://github.com/Liqing1124/Helmet-Shop.git
cd Helmet-Shop
```

#### 2. Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

#### 3. Thiết lập môi trường (Bắt buộc)
Tạo file `.env.local` trong thư mục gốc với nội dung:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Lưu ý quan trọng:**
- Không commit file `.env.local` vào repository (đã được thêm vào `.gitignore`)
- Lấy credentials từ Supabase dashboard (Settings > API)
- Sử dụng **anon/public key** cho `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### 4. Thiết lập Supabase Database
Sử dụng script setup tích hợp sẵn:

```bash
npm run setup:supabase
```

Hoặc làm theo các bước thủ công:
1. Tạo project Supabase tại [supabase.com](https://supabase.com)
2. Copy credentials từ Settings > API
3. Chạy SQL schema từ [`supabase-schema.sql`](supabase-schema.sql) trong SQL Editor
4. Xác nhận dữ liệu mẫu đã được insert

#### 5. Chạy development server
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

#### 6. Mở trình duyệt
Truy cập: `http://localhost:3000`

### 🚀 Các lệnh hữu ích

| Command | Mô tả |
|---------|-------|
| `npm run dev` | Chạy development server với hot reload |
| `npm run build` | Build production bundle |
| `npm run start` | Chạy production server |
| `npm run lint` | Kiểm tra code quality |
| `npm run setup:supabase` | Script hướng dẫn thiết lập Supabase |

### 🐛 Troubleshooting

**Lỗi thiếu environment variables:**
```bash
Error: Supabase configuration is missing
```
→ Kiểm tra file `.env.local` đã được tạo và credentials đúng chưa

**Lỗi kết nối database:**
```bash
Error: connection to server at "..." failed
```
→ Xác nhận Supabase URL và API key chính xác

**Lỗi Row Level Security:**
```bash
Error: new row violates row-level security policy
```
→ Đảm bảo RLS policies đã được tạo trong Supabase

**Dữ liệu không hiển thị:**
→ Xác nhận SQL schema đã được chạy thành công và dữ liệu mẫu đã được insert

## 📁 Cấu trúc dự án

```
helmet-shop/
├── .env.local              # Environment variables (Bắt buộc)
├── .gitignore              # Git ignore configuration
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies và scripts
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # Documentation (file này)
├── README-Supabase.md      # Supabase setup guide
├── supabase-schema.sql     # Database schema SQL
├── supabase-setup.js       # Setup script helper
├── tsconfig.json           # TypeScript configuration
├── database/
│   └── helmet-shop.db      # Local SQLite database (optional)
├── public/                 # Static assets
│   ├── bihelmet.jpg        # Brand image
│   └── ...                 # Other static files
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── about/          # About page
│   │   │   └── page.tsx
│   │   ├── checkout/       # Checkout page
│   │   │   └── page.tsx
│   │   ├── contact/        # Contact page
│   │   │   └── page.tsx
│   │   ├── products/       # Products page
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── BestSellers.tsx     # Best sellers section
│   │   ├── CartDrawer.tsx      # Shopping cart drawer
│   │   ├── FeaturedCategories.tsx  # Featured categories
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Navigation.tsx      # Navigation menu
│   │   ├── ProductModal.tsx    # Product detail modal
│   │   ├── Skeleton.tsx        # Loading skeleton
│   │   ├── Toast.tsx           # Toast notifications
│   │   └── TrustFactors.tsx    # Trust factors section
│   ├── contexts/            # React Contexts
│   │   └── CartContext.tsx      # Shopping cart context
│   └── lib/                 # Utilities & data
│       ├── data.ts              # Supabase data fetching functions
│       ├── supabase.ts          # Supabase client configuration
│       └── utils.ts             # Utility functions
└── database/                # Local database (optional)
    └── helmet-shop.db       # SQLite database file
```

### 📋 Files quan trọng

| File | Mô tả |
|------|-------|
| `.env.local` | Cấu hình Supabase (Bắt buộc) |
| `supabase-schema.sql` | Database schema cho Supabase |
| `README-Supabase.md` | Hướng dẫn thiết lập Supabase chi tiết |
| `src/lib/supabase.ts` | Cấu hình Supabase client |
| `src/lib/data.ts` | Các hàm lấy dữ liệu từ Supabase |
| `src/contexts/CartContext.tsx` | Quản lý giỏ hàng với React Context |

## 🗄️ Database Schema

### Bảng chính

#### `categories`
- `id`: ID duy nhất (SERIAL PRIMARY KEY)
- `name`: Tên danh mục (TEXT NOT NULL UNIQUE)
- `image`: URL hình ảnh (TEXT NOT NULL)
- `created_at`: Thời gian tạo (TIMESTAMP WITH TIME ZONE)
- `updated_at`: Thời gian cập nhật (TIMESTAMP WITH TIME ZONE)

#### `products`
- `id`: ID duy nhất (SERIAL PRIMARY KEY)
- `name`: Tên sản phẩm (TEXT NOT NULL)
- `price`: Giá sản phẩm (TEXT NOT NULL)
- `rating`: Rating (INTEGER 1-5)
- `image`: URL hình ảnh (TEXT NOT NULL)
- `description`: Mô tả sản phẩm (TEXT NOT NULL)
- `sizes`: Kích thước có sẵn (TEXT[])
- `category_id`: Tham chiếu đến categories (INTEGER)
- `created_at`: Thời gian tạo (TIMESTAMP WITH TIME ZONE)
- `updated_at`: Thời gian cập nhật (TIMESTAMP WITH TIME ZONE)

#### `orders`
- `id`: ID duy nhất (SERIAL PRIMARY KEY)
- `user_id`: ID người dùng (UUID, tham chiếu đến auth.users)
- `total_amount`: Tổng tiền (DECIMAL 10,2)
- `status`: Trạng thái đơn hàng (TEXT, mặc định 'pending')
- `customer_name`: Tên khách hàng (TEXT NOT NULL)
- `customer_email`: Email khách hàng (TEXT NOT NULL)
- `customer_phone`: Số điện thoại (TEXT)
- `shipping_address`: Địa chỉ giao hàng (TEXT NOT NULL)
- `created_at`: Thời gian tạo (TIMESTAMP WITH TIME ZONE)
- `updated_at`: Thời gian cập nhật (TIMESTAMP WITH TIME ZONE)

#### `order_items`
- `id`: ID duy nhất (SERIAL PRIMARY KEY)
- `order_id`: Tham chiếu đến orders (INTEGER)
- `product_id`: Tham chiếu đến products (INTEGER)
- `product_name`: Tên sản phẩm tại thời điểm đặt (TEXT NOT NULL)
- `product_price`: Giá sản phẩm tại thời điểm đặt (TEXT NOT NULL)
- `product_image`: Hình ảnh sản phẩm tại thời điểm đặt (TEXT NOT NULL)
- `size`: Kích thước đã chọn (TEXT NOT NULL)
- `quantity`: Số lượng (INTEGER NOT NULL)
- `created_at`: Thời gian tạo (TIMESTAMP WITH TIME ZONE)

#### `trust_factors`
- `id`: ID duy nhất (SERIAL PRIMARY KEY)
- `text`: Nội dung yếu tố tin cậy (TEXT NOT NULL)
- `icon`: Tên icon (TEXT NOT NULL)
- `created_at`: Thời gian tạo (TIMESTAMP WITH TIME ZONE)
- `updated_at`: Thời gian cập nhật (TIMESTAMP WITH TIME ZONE)

### Row Level Security (RLS)

Dự án sử dụng Row Level Security để bảo vệ dữ liệu:

- **Public Read Access**: Cho phép mọi người đọc products, categories, và trust_factors
- **Authenticated Users**: Cho phép người dùng đã đăng nhập tạo đơn hàng và xem đơn hàng của chính mình

## ⚙️ Environment Variables

### Bắt buộc

| Variable | Mô tả | Giá trị ví dụ |
|----------|-------|---------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL của Supabase project | `https://lynpjixetbezovkalwbd.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | API Key công khai (anon key) | `sb_publishable_kQ5n1zZwhjfcp1gNWsWzug_gPGaTH2k` |

### Cách lấy credentials

1. Đăng nhập vào [Supabase Dashboard](https://supabase.com/dashboard)
2. Chọn project của bạn
3. Vào **Settings** > **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Project API keys** → **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Lưu ý**: Không bao giờ sử dụng **service_role** key trong client-side code!

## 🚀 Deployment

### Vercel (Khuyến khích)

1. Push code lên GitHub/GitLab
2. Đăng nhập vào [Vercel](https://vercel.com)
3. Import repository
4. Thêm environment variables trong Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

### Netlify

1. Push code lên GitHub/GitLab
2. Đăng nhập vào [Netlify](https://netlify.com)
3. Import repository
4. Thêm environment variables trong Netlify dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

### Local Build

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

## 🤝 Contributing

Đóng góp vào dự án:

1. Fork repository
2. Tạo branch mới: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push branch: `git push origin feature/your-feature`
5. Tạo Pull Request

### Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Update documentation khi cần thiết
- Test code trước khi commit

## 📝 License

Dự án được phát triển và duy trì bởi **Bi Helmet**.

## 📞 Support

Nếu bạn gặp vấn đề:

1. Kiểm tra [README-Supabase.md](README-Supabase.md) cho vấn đề Supabase
2. Kiểm tra console browser cho lỗi JavaScript
3. Kiểm tra Supabase dashboard cho lỗi database
4. Liên hệ: [GitHub Issues](https://github.com/Liqing1124/Helmet-Shop/issues)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - Framework chính
- [Supabase](https://supabase.com/) - Backend-as-a-Service
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

---

**Cập nhật lần cuối**: 2026-01-20

**Phiên bản**: 0.1.0
