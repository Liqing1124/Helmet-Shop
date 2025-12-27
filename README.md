# 🏍️ Helmet Shop - Cửa Hàng Mũ Bảo Hiểm

Một website thương mại điện tử hiện đại dành cho cửa hàng mũ bảo hiểm, được xây dựng bằng Next.js với thiết kế responsive và trải nghiệm người dùng tối ưu.

![Helmet Shop Preview](https://via.placeholder.com/800x400?text=Helmet+Shop+Preview)

## ✨ Tính năng chính

### 🎯 Tính năng cốt lõi
- **🏠 Trang chủ**: Hero section, danh mục sản phẩm nổi bật, sản phẩm bán chạy
- **🛍️ Sản phẩm**: Danh sách sản phẩm với bộ lọc và tìm kiếm
- **🛒 Giỏ hàng**: Quản lý giỏ hàng với React Context
- **💳 Thanh toán**: Trang thanh toán với form đơn giản
- **📞 Liên hệ**: Form liên hệ hoàn chỉnh với thông tin cửa hàng

### 🎨 Giao diện & Trải nghiệm
- **🌙 Dark Mode**: Chế độ tối/sáng với chuyển đổi mượt mà
- **📱 Responsive**: Tương thích hoàn hảo trên mọi thiết bị
- **🎭 Animations**: Hiệu ứng mượt mà với Framer Motion
- **🇻🇳 Tiếng Việt**: Giao diện hoàn toàn bằng tiếng Việt

### 🛠️ Chức năng kỹ thuật
- **⚡ Performance**: Tối ưu với Next.js App Router
- **🔍 SEO**: Cấu hình SEO cơ bản
- **📧 Form Validation**: Validation form với HTML5 và JavaScript
- **💾 Local Storage**: Lưu trữ dữ liệu giỏ hàng

## 🚀 Công nghệ sử dụng

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context
- **Deployment**: Vercel/Netlify

## 📦 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18.0 hoặc cao hơn
- npm hoặc yarn hoặc pnpm

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

3. **Chạy development server**
   ```bash
   npm run dev
   # hoặc
   yarn dev
   # hoặc
   pnpm dev
   ```

4. **Mở trình duyệt**
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

## 🎯 Screenshots

### Trang chủ
![Home Page](https://via.placeholder.com/600x300?text=Home+Page)

### Trang liên hệ
![Contact Page](https://via.placeholder.com/600x300?text=Contact+Page)

### Giỏ hàng
![Cart](https://via.placeholder.com/600x300?text=Cart)

## 📧 Thông tin liên hệ

- **Email**: info@helmetstore.vn
- **Điện thoại**: +84 123 456 789
- **Địa chỉ**: 123 Đường ABC, Quận 1, TP.HCM
- **Giờ làm việc**: 8:00 - 18:00 (Thứ 2 - Chủ nhật)

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 🙏 Lời cảm ơn

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

---

**🚀 Phát triển bởi**: Helmet Shop Team

**📅 Cập nhật lần cuối**: Tháng 12, 2025
