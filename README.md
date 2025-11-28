# Personal Portfolio

A modern, interactive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Stunning Animations** - Smooth transitions and micro-interactions powered by Framer Motion
- **Fully Responsive** - Works perfectly on all devices from mobile phones to large screens
- **Interactive UI** - Particle background, cursor glow effect, and animated components
- **Modern Design** - Glass morphism, gradient effects, and clean typography
- **Performance Optimized** - Fast loading with Vite and optimized assets

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd ePortfolio-v2
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **`src/components/Hero.jsx`** - Name, title, location, social links
2. **`src/components/About.jsx`** - Bio, highlights, tech stack
3. **`src/components/Experience.jsx`** - Work experience details
4. **`src/components/Projects.jsx`** - Project information
5. **`src/components/Education.jsx`** - Educational background
6. **`src/components/Contact.jsx`** - Contact information, social links
7. **`src/components/Footer.jsx`** - Name, social links
8. **`index.html`** - Meta tags, title

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Each component has its own styling using Tailwind classes

### Adding Resume

1. Place your resume PDF file in the `public` folder
2. Rename it to `resume.pdf`
3. The download button in the navbar will automatically work

**Important**: Make sure the file is named exactly `resume.pdf` (lowercase) and is in the `public` folder at the root of the project.

### Setting Up Contact Form (Google Sheets)

The contact form can save submissions to Google Sheets. See `GOOGLE_SHEETS_SETUP.md` for detailed instructions on:
- Creating a Google Sheet
- Setting up Google Apps Script
- Deploying as a Web App
- Connecting it to your portfolio

**Note**: The form will work without Google Sheets setup, but submissions won't be saved. Follow the setup guide to enable message storage.

## Project Structure

```
ePortfolio-v2/
├── public/
│   ├── favicon.svg
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── SectionHeading.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CursorGlow.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Deployment

This project can be deployed to any static hosting service:

- **Netlify** - Drag and drop the `dist` folder or connect your Git repo
- **Vercel** - Connect your Git repo for automatic deployments
- **GitHub Pages** - Use the `gh-pages` branch

## License

MIT License - feel free to use this template for your own portfolio!
