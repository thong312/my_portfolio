"# 🎨 Ly Minh Thong — AI Product UX Portfolio

> Building AI-native product experiences that make complex outputs feel clear, trustworthy, and easy to act on.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel)](https://my-portfolio-psi-two-fbclokmcbw.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/YOUR_USERNAME/my-portfolio)

## 🚀 Live Demo

Xem portfolio trực tiếp tại: **[https://my-portfolio-psi-two-fbclokmcbw.vercel.app/](https://my-portfolio-psi-two-fbclokmcbw.vercel.app/)**

## ✨ Tính Năng

- 📱 **Responsive Design** - Hoạt động tốt trên tất cả thiết bị (desktop, tablet, mobile)
- ✨ **Interactive Features**
  - Smooth scrolling tới các section
  - Active navigation highlighting
  - Fade-in animations khi cuộn trang
  - Mobile hamburger menu
  - Scroll-to-top button
- 🎨 **Modern UI** - Thiết kế sạch, chuyên nghiệp với DM Serif Display & DM Sans
- 🚀 **Auto Deploy** - CI/CD pipeline tự động deploy lên Vercel
- ⚡ **Fast & Lightweight** - Tĩnh HTML/CSS/JS, không dependencies nặng

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Google Fonts (DM Serif Display, DM Sans, JetBrains Mono)
- **Deployment**: Vercel + GitHub Actions
- **Version Control**: Git & GitHub

## 📂 Cấu Trúc Project

```
my_portfolio/
├── index.html              # Main page
├── css/
│   └── style.css          # Styles
├── js/
│   └── script.js          # Interactions & animations
├── vercel.json            # Vercel config
├── .gitignore             # Git ignore rules
├── .github/
│   └── workflows/
│       └── deploy.yml     # CI/CD workflow
└── README.md              # This file
```

## 🎯 Features Chi Tiết

### 1. Smooth Scrolling & Navigation
- Click vào nav links → cuộn mượt đến section
- Active link highlight khi bạn scroll

### 2. Mobile Menu
- Hamburger menu (☰) tự động hiện trên màn hình nhỏ
- Responsive navigation links

### 3. Scroll Animations
- Các phần tử fade-in khi bạn cuộn xuống
- Smooth entry animations

### 4. Email Validation
- Validate email format trước khi gửi
- Security check đơn giản

### 5. Scroll-to-Top Button
- Nút mũi tên (↑) giúp quay lên đầu trang
- Hiển thị khi scroll xuống 500px

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/my-portfolio.git
cd my-portfolio
```

### 2. Chạy Locally

**Option A: Dùng Python**
```bash
python -m http.server 3000
```

**Option B: Dùng Node.js**
```bash
npx http-server -p 3000
```

**Option C: Mở trực tiếp**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Truy cập: `http://localhost:3000`

## 📝 Tùy Chỉnh

### Thay đổi Thông Tin Cá Nhân

Mở `index.html` và sửa:
- Tên: `<title>Ly Minh Thong — AI Product UX Portfolio</title>`
- Email: `mailto:lyminhthong312@gmail.com`
- Bio & description
- Projects & skills

### Thêm Project Mới

Thêm vào section `#projects`:
```html
<div class="project-card">
  <div class="project-screen">
    <!-- Your project UI mockup -->
  </div>
  <div class="project-info">
    <h3>Project Name</h3>
    <p>Description</p>
  </div>
</div>
```

### Customize Màu Sắc

Sửa CSS variables trong `css/style.css`:
```css
:root {
  --accent: #1a4fd6;        /* Primary color */
  --teal: #0d9e75;          /* Secondary color */
  --black: #0d0d0d;         /* Dark color */
  --white: #fafaf8;         /* Light color */
}
```

## 🔄 CI/CD & Auto Deploy

### Setup Workflow

1. **Push code** → GitHub
2. **GitHub Actions** → Validate HTML/Files
3. **Vercel** → Tự động deploy

### Xem Build Status

- GitHub: Actions tab
- Vercel: [vercel.com/dashboard](https://vercel.com/dashboard)

### Manual Deploy (nếu cần)

```bash
# Cài Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 📱 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com/)

## 🤝 Contributing

Muốn cải thiện portfolio? Pull requests được welcome!

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📧 Contact

- Email: [lyminhthong312@gmail.com](mailto:lyminhthong312@gmail.com)
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- Website: [https://my-portfolio-psi-two-fbclokmcbw.vercel.app/](https://my-portfolio-psi-two-fbclokmcbw.vercel.app/)

## 📄 License

Dự án này được cấp phép dưới [MIT License](LICENSE) - tự do sử dụng, sửa đổi, phân phối.

## 🙏 Credits

- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Icons**: Unicode & Emoji
- **Design Inspiration**: Modern minimal portfolio design

---

**Made with ❤️ by Ly Minh Thong**

⭐ If you find this useful, please give it a star!

Last updated: May 19, 2026" 
