<<<<<<< HEAD
# La Pura Landing Page

Landing page dự án **La Pura Bình Dương** — Chủ đầu tư Tập Đoàn Phát Đạt.

## 🚀 Tech Stack

- **React 18** + **Vite 5**
- **npm** package manager
- Deploy: **GitHub** + **Vercel**

## 📁 Cấu trúc thư mục

```
landing-page/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── LaPuraLanding.jsx   # Main landing page component
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Global styles + fonts
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD auto deploy to Vercel
├── .gitignore
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## 💻 Chạy local

```bash
# Cài dependencies
npm install

# Chạy dev server (http://localhost:3000)
npm run dev

# Build production
npm run build

# Preview bản build
npm run preview
```

## 🌐 Deploy lên GitHub

```bash
# Bước 1: Init git
git init
git add .
git commit -m "feat: initial landing page setup"

# Bước 2: Tạo repo trên GitHub rồi push
git remote add origin https://github.com/<username>/landing-page.git
git branch -M main
git push -u origin main
```

## ▲ Deploy lên Vercel

### Cách 1: Vercel CLI (nhanh nhất)
```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

### Cách 2: Import từ GitHub trên vercel.com
1. Vào [vercel.com](https://vercel.com) → **Add New Project**
2. Import repo GitHub vừa tạo
3. Framework: **Vite** (tự nhận diện)
4. Nhấn **Deploy** → Done ✅

### Cách 3: Auto deploy qua GitHub Actions
Thêm 3 secrets vào GitHub repo (`Settings > Secrets`):
- `VERCEL_TOKEN` — lấy tại vercel.com/account/tokens
- `VERCEL_ORG_ID` — chạy `vercel env ls` hoặc xem `.vercel/project.json`
- `VERCEL_PROJECT_ID` — tương tự trên

Sau đó mỗi lần `git push main` → tự động deploy production 🎉

## 📝 Chỉnh sửa nội dung

Tất cả nội dung (giá, tiện ích, thông tin liên hệ...) nằm trong:
```
src/components/LaPuraLanding.jsx
```

Các hằng số dữ liệu ở đầu file:
- `NAV_LINKS` — menu điều hướng
- `PRODUCTS` — sản phẩm đang mở bán + giá
- `OVERVIEW` — bảng tổng quan dự án
- `AMENITIES` — danh sách tiện ích
=======
# landing-page-rever
>>>>>>> e616c0e6a3cb3ae3c299e55d2d60210bb38805b1
