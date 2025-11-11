# Slok Shah – Portfolio

A responsive, single-page React portfolio that showcases Slok Shah’s engineering experience, skills, and contact information. The site is built with Vite + TypeScript and features animated sections, theme switching, and a mobile-first layout.

## ✨ Features

- **Hero & About** – Highlights current role and experience with animated, scroll-triggered reveals.
- **Experience Cards** – Timeline-style company cards with key accomplishments and tool stacks.
- **Skillset Grid** – Categorised skill tiles with tooltips and responsive layout across breakpoints.
- **Theme Toggle** – Persisted light/dark mode with custom animated toggle and CSS token system.
- **Cursor Glow** – Custom pointer trail that subtly illuminates the page background.
- **Mobile Social Bar** – Mobile-friendly email + social panel that replaces desktop side rails.
- **Contact Form** – Formspree-backed form with validation feedback and success messaging.
- **Responsive Design** – Layout adjusts for desktop, tablet and mobile without loss of fidelity.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Tailwind-inspired utility classes, custom CSS modules
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Custom SVG set + react-icons
- **Forms**: [Formspree](https://formspree.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

Open the dev server output (default `http://localhost:5173`) to view the site locally.

## 📁 Project Structure

```
src/
  assets/            # images & static media
  components/        # shared UI components (Logo, ThemeToggle, Cursor, etc.)
  sections/          # page sections (Hero, Summary, Work, Skillset, Contact, Footer)
  styles/            # CSS files that back each section/component
  constants/data.ts  # centralised content (hero copy, companies, skills, socials)
```

## 🌐 Deployment Notes

- The project root is the current directory (formerly `/portfolio-v1`).
- `vercel.json` is configured for Vercel; deploy using `npm run build` as the build command and `dist` as the output directory.

## 📄 License

This project is proprietary to Slok Shah. Feel free to reference the structure, but do not reuse content or assets without permission.

## 🙌 Acknowledgements

- Designed in Figma, built in VS Code.
- Typography: [Inter](https://rsms.me/inter/).
- Hosting by Vercel.

---

Need improvements or found a bug? Open an issue or reach out at [slokshah92@gmail.com](mailto:slokshah92@gmail.com).
