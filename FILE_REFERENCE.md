# 📚 Portfolio File Reference Guide

Complete breakdown of every file in your professional portfolio project.

## 📂 Root Level Files

### `package.json`
- Dependencies and build scripts
- **Key scripts**:
  - `npm run dev` - Start development server
  - `npm run build` - Create production build
  - `npm run preview` - Test production build locally

### `vite.config.js`
- Vite build configuration
- Defines build output, plugins, and dev server settings
- React plugin configuration

### `tailwind.config.js`
- Tailwind CSS theme configuration
- Custom colors: primary, dark, accent
- Custom animations: float, glow, pulse-glow
- DarkMode configuration

### `postcss.config.js`
- PostCSS plugin configuration
- Enables Tailwind CSS and Autoprefixer

### `index.html` (Root)
- Main HTML entry point for Vite
- Links to React root element
- Contains meta tags for SEO
- Favicon configuration

### `.gitignore`
- Specifies files Git should ignore
- Includes node_modules, dist, .env files

### `README.md`
- Full project documentation
- Installation and deployment instructions
- Feature overview and tech stack

### `SETUP_GUIDE.md`
- Quick start and customization guide
- Troubleshooting tips
- Deployment options

---

## 🗂️ `src/` Directory

### `main.jsx`
**Entry point for React application**
- Initializes React DOM
- Renders App component into #root element

```javascript
import App from "./App.jsx"
ReactDOM.createRoot(document.getElementById("root")).render(<App />)
```

### `App.jsx`
**Main application component**
- Manages dark mode state with localStorage
- Imports and renders all page sections
- Handles theme toggle
- AOS initialization

**Structure**:
```
Cursor
Navbar (with dark mode toggle)
Hero
Skills
Projects
Experience
Certificates
Contact
Footer
```

### `index.css`
**Global styles and animations**
- Tailwind CSS directives
- AOS import
- Custom scrollbar styling
- Glassmorphism effects
- Custom animations (fadeIn, etc)
- Selection and focus styles

---

## 🎨 Components (`src/components/`)

### `Cursor.jsx` ⭐
**Custom animated cursor with Framer Motion**
- Spring physics animation
- Changes on hover over interactive elements
- Scale effects on click
- Uses mix-blend-screen for transparency

**Key Features**:
- Two-ring cursor design
- Smooth follow animation
- Hover state detection

### `Navbar.jsx` 🧭
**Navigation header with theme toggle**
- Fixed navbar with backdrop blur
- Mobile drawer menu with hamburger toggle
- Dark/Light mode toggle button
- Smooth scroll navigation links
- Responsive layout

**Props**:
- `darkMode: boolean`
- `toggleDarkMode: function`

### `Hero.jsx` 🚀
**Landing section with introduction**
- Animated profile image with float effect
- Main headline with gradient text
- Professional bio and description
- CTA buttons: "Get In Touch" and "Download CV"
- Scroll indicator animation
- AOS fade-up animation

**Features**:
- Staggered animations for elements
- Motion variants for entry animations
- Download CV button
- Smooth scroll to contact section

### `Skills.jsx` 💻
**Technical skills showcase**
- Categorized: Frontend, Backend, AI Engineering
- 25+ skills total with proficiency levels
- Color-coded badges:
  - Advanced: Emerald green
  - Intermediate: Blue
  - Beginner: Amber
- Official icons via Lucide React
- Proficiency legend

**Skills Structure**:
```javascript
{
  name: "React",
  level: "advanced",
  category: "frontend",
  icon: <Icon />
}
```

### `Projects.jsx` 🎯
**Featured projects showcase**
- 6 project cards in responsive grid
- Images from external CDN
- Tech stack badges
- GitHub and Live demo links
- Hover animations with scale effect
- Smooth transitions

**Project Data**:
```javascript
{
  title, description, image,
  tech: [], repo, demo
}
```

### `Certificates.jsx` 🏆
**Expandable certificate grid**
- Shows first 6 certificates by default
- "See More" button reveals all 22
- Smooth expand/collapse animation
- Award icon for each cert
- Links to credential pages
- Certificate count display

**Animation**: AnimatePresence for smooth addition/removal

### `Experience.jsx` 📈
**Timeline of professional experience**
- 6 experience entries
- Types: Work, Speaker, Bootcamp
- Color-coded by type
- Achievement bullets for each role
- Timeline connector lines
- Duration and company info

**Experience Structure**:
```javascript
{
  role, company, type,
  duration, description,
  achievements: []
}
```

### `Contact.jsx` 📧
**Contact form and information**
- Contact information display (email, phone, location)
- Social media links
- Resume download card
- Working contact form with validation
- Success message feedback
- Responsive layout

**Contact Services**:
- Email link
- Phone link
- Location display
- Resume download

### `Footer.jsx` 👣
**Footer with credits and links**
- Brand name and tagline
- Quick navigation links
- Social media icons
- Last updated date (auto-calculated)
- Copyright notice (2026)
- Tech stack credits
- Back to top link

**Features**:
- Auto-formatted date
- Social icon animations
- Responsive layout

---

## 📊 Data (`src/constants/data.jsx`)

**Central data source with:**

### SKILLS Array (25 items)
- Organized by category (frontend, backend, ai)
- Proficiency levels (advanced, intermediate, beginner)
- Lucide React icons

### PROJECTS Array (6 items)
- Project title, description, image URL
- Technology stack
- GitHub repo and demo links

### CERTIFICATES Array (22 items)
- Certificate ID, title, issuer
- Date issued
- Credential verification link

### EXPERIENCES Array (6 items)
- Role, company, type (work/speaker/bootcamp)
- Duration and description
- 3 key achievements each

### SOCIAL_LINKS Array (4 items)
- GitHub, LinkedIn, Twitter, Email
- URLs and icon names

### CONTACT_INFO Object
- Email, phone, location
- Resume download link

---

## 🗂️ Directory Structure

```
ameliaakhila.github.oi/
├── src/
│   ├── components/
│   │   ├── Certificates.jsx    (🏆 Expandable cert grid)
│   │   ├── Contact.jsx         (📧 Contact form)
│   │   ├── Cursor.jsx          (⭐ Custom cursor)
│   │   ├── Experience.jsx      (📈 Timeline)
│   │   ├── Footer.jsx          (👣 Footer)
│   │   ├── Hero.jsx            (🚀 Landing)
│   │   ├── Navbar.jsx          (🧭 Navigation)
│   │   ├── Projects.jsx        (🎯 Projects)
│   │   └── Skills.jsx          (💻 Skills)
│   ├── constants/
│   │   └── data.jsx            (📊 All data)
│   ├── styles/                 (⚡ Empty - for future styles)
│   ├── App.jsx                 (🎨 Main app)
│   ├── index.css               (🎨 Global styles)
│   └── main.jsx                (⚙️ Entry point)
├── public/
│   └── index.html              (📄 Template)
├── index.html                  (📄 Vite entry)
├── vite.config.js              (⚙️ Vite config)
├── tailwind.config.js          (🎨 Tailwind config)
├── postcss.config.js           (⚙️ PostCSS config)
├── package.json                (📦 Dependencies)
├── package-lock.json           (📦 Lock file)
├── README.md                   (📚 Documentation)
├── SETUP_GUIDE.md              (🚀 Quick start)
├── .gitignore                  (🔒 Git config)
└── dist/                       (📦 Build output)
```

---

## 🔄 Data Flow

```
data.jsx (constants)
    ↓
Skills.jsx (uses SKILLS)
Projects.jsx (uses PROJECTS)
Certificates.jsx (uses CERTIFICATES)
Experience.jsx (uses EXPERIENCES)
Contact.jsx (uses CONTACT_INFO, SOCIAL_LINKS)
Footer.jsx (uses SOCIAL_LINKS)
    ↓
App.jsx (imports all components)
    ↓
main.jsx (renders App into #root)
    ↓
index.html (displays in browser)
```

---

## 📝 Component Customization Checklist

- [ ] Update `data.jsx` with your info
- [ ] Modify colors in `tailwind.config.js`
- [ ] Add profile image to Hero section
- [ ] Update Navbar links if needed
- [ ] Customize animations in components
- [ ] Update Footer copyright year
- [ ] Add your social media links
- [ ] Set up email service for Contact form

---

## 🔌 Dependencies at a Glance

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.4 | UI framework |
| framer-motion | ^12.36.0 | Animations |
| aos | ^2.3.4 | Scroll animations |
| tailwindcss | ^4.2.1 | Styling |
| lucide-react | ^0.577.0 | Icons |
| vite | ^4.4.9 | Build tool |

---

## 🎯 Quick File Locations

**Need to...** | **Edit this file**
---|---
Add skills | `src/constants/data.jsx`
Change colors | `tailwind.config.js`
Update text | `src/components/*.jsx`
Modify navigation | `src/components/Navbar.jsx`
Update hero | `src/components/Hero.jsx`
Add projects | `src/constants/data.jsx`
Change theme | `src/App.jsx` (dark mode logic)
Update styles | `src/index.css`

---

## 🚀 For Deployment

Files to include in production:
- `dist/` folder (from build)
- All source files (optional)
- `README.md` and `SETUP_GUIDE.md`

Files to ignore:
- `node_modules/`
- `.git/` (or include for version control)
- `.env` files
- Build cache

---

*Generated: March 16, 2026*
*Portfolio Template v1.0*
