# Amelia Akhila Aqna - Professional Portfolio

A modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS. Features custom cursor animations, smooth scroll effects, dark mode support, and a comprehensive showcase of projects, skills, and experience.

## 🚀 Features

- **Custom Animated Cursor**: Smooth, spring-based cursor with hover effects using Framer Motion
- **Dark Mode Toggle**: Persistent theme preference with elegant light/dark transitions
- **Scroll Animations**: AOS (Animate On Scroll) integration for element animations
- **Responsive Design**: Pixel-perfect mobile, tablet, and desktop layouts
- **Component Architecture**: Modular, maintainable component structure
- **Glassmorphism UI**: Modern glassmorphism effects throughout
- **Smooth Navigation**: Navbar with mobile drawer menu
- **Performance Optimized**: Production-ready code with minimal bundle size

## 📋 Sections

1. **Me** - Engaging introduction with CTA buttons
2. **Skills** - Categorized technical skills with proficiency levels
3. **Projects** - Showcase of featured projects with live demos
4. **Experience** - Timeline view of work, speaking, and bootcamp experiences
5. **Certificates** - Expandable certificate grid (6 visible, expand to show all)
6. **Contact** - Contact form, social links, and resume download
7. **Footer** - Last updated date and copyright information

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS 4, PostCSS
- **Scroll Effects**: AOS (Animate On Scroll)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Dark Mode**: Class-based theming with localStorage

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/ameliaakhila/ameliaakhila.github.oi.git
cd ameliaakhila.github.oi
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## 🔨 Building for Production

1. **Build the project**
```bash
npm run build
```

2. **Preview the build**
```bash
npm run preview
```

3. **Deploy to Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

## 📝 Customization

### Update Personal Information
Edit `src/constants/data.js` to update:
- Skills and proficiency levels
- Projects and project links
- Certificates and credentials
- Work experience and achievements
- Contact information
- Social media links

### Styling
- Colors: Modify Tailwind config in `tailwind.config.js`
- Global styles: Edit `src/index.css`
- Component styles: Use inline Tailwind classes or create CSS modules

### Adding New Sections
1. Create component in `src/components/`
2. Import in `src/App.jsx`
3. Add to the component tree

## 🎨 Color Scheme

- **Primary Light**: #E0F2FE (light blue background)
- **Primary Dark**: #0F172A (dark blue background)
- **Accent**: #0EA5E9 (vibrant cyan)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration Files

- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `package.json` - Dependencies and scripts

## 📊 Performance

- Optimized bundle size with tree-shaking
- Lazy-loaded animations
- Image optimization via external CDN
- Smooth 60fps animations with Framer Motion
- AOS for performant scroll animations

## 🚀 Deployment Options

### Vercel (Recommended)
- Direct GitHub integration
- Automatic deployments on push
- Free tier available
- Custom domain support

### Netlify
- Simple GitHub deployment
- Built-in analytics
- Free SSL certificates

### GitHub Pages
- Free hosting for static sites
- Custom domain support
- Limited to static content

## 📄 License

© 2026. Built with Precision. Unauthorized duplication is strictly prohibited.

## 🤝 Contributing

This is a personal portfolio. For improvements or bug reports, please open an issue.

## 📞 Contact

- Email: ameliaakhila29@gmail.com
- GitHub: [ameliaakhila](https://github.com/ameliaakhila)
- LinkedIn: [Amelia Akhila](https://linkedin.com/in/ameliaakhila)

---

**Last Updated**: March 16, 2026

Built with React • Framer Motion • Tailwind CSS • AOS
