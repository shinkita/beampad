# 🏢 REIT Investment Blog – Beampad

This is a **Next.js**-powered blog focused on **REIT (Real Estate Investment Trust) investments**, built with modern tooling and designed for performance, readability, and SEO. The platform supports Markdown and MDX-based content, making it easy to manage and scale content for financial education and real estate awareness.

🔗 Live: [https://beampad.vercel.app/blogs](https://beampad.vercel.app/blogs)

---

## 📌 Features

- ✍️ MDX/Markdown blog post support
- 🧠 SEO-friendly structure with slugs, meta tags, and canonical URLs
- 📱 Responsive, mobile-first layout using **TailwindCSS**
- 📅 Date & timezone formatting using `date-fns`
- 🧩 Dynamic blog generation from local Markdown files
- 📈 Google Tag Manager support via `react-gtm-module`
- 📺 Embedded YouTube videos with `react-lite-youtube-embed`
- 🎯 Slug generation via `github-slugger`
- 🧵 GFM (GitHub Flavored Markdown) support with `remark-gfm`

---

## 🧱 Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Styling**: Tailwind CSS, Sass
- **Markdown Parser**: `gray-matter`, `marked`, `next-mdx-remote`
- **Icons**: `react-icons`
- **Embeds**: `react-lite-youtube-embed`
- **Analytics**: Google Tag Manager

---

## 🛠 Installation

```bash
git clone https://github.com/your-username/beampad-reit-blog.git
cd beampad-reit-blog
npm install
npm run dev
