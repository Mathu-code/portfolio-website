# ⚡ Mathuran's Personal Portfolio Website

> **Live Website:** [mathu.me](https://mathu.me/) | [mathu-code.github.io](https://Mathu-code.github.io)  
> **Author:** Mathuran ([@Mathu-code](https://github.com/Mathu-code))  
> **Specialization:** Full Stack Engineering & AI / Machine Learning (Data Science @ SLIIT)

---

## 🌟 Highlights & Features

- 🧠 **In-Browser Interactive AI / ML Lab:** Real-time client-side machine learning inference simulators for **Customer Churn Risk** and **Obesity & Metabolic Risk Stratification**.
- 💻 **Interactive Developer Terminal:** Built-in command line interface (`help`, `skills`, `projects`, `demo`, `cat resume.json`, `sudo hire`).
- 🚀 **Dynamic Project Showcase:** Filterable gallery across **AI & Machine Learning**, **Full Stack Web (MERN / Next.js / Spring Boot)**, and **Android (Kotlin)** projects.
- 🎨 **Cyber-Minimalist Design System:** Glassmorphism UI, interactive neural particle constellation background, smooth theme toggle (Dark/Light), and mobile-responsive layout.
- ⚡ **Zero-Build Native Performance:** Pure HTML5, modern CSS3, and modular ES6+ JavaScript for 100/100 Lighthouse performance.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Canvas API
- **Typography:** Plus Jakarta Sans, Outfit, Fira Code
- **Hosting & CI/CD:** GitHub Pages with custom domain DNS `mathu.me`

## Fixing HTTPS for `mathu.me`

The `CNAME` file is correctly configured, but HTTPS is issued by GitHub Pages only after the
custom domain points to GitHub Pages and the certificate is provisioned. If the browser shows
"This site doesn't support a secure connection" or a certificate-name error:

1. In the repository's **Settings -> Pages**, set the source to the deployment branch and
   confirm the custom domain is exactly `mathu.me`.
2. Enable **Enforce HTTPS** after GitHub finishes certificate provisioning. If the checkbox is
   unavailable, remove and re-add the custom domain, then wait for DNS/certificate checks to
   complete.
3. At the DNS provider, use GitHub Pages records:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`
   - `CNAME` for `www`: `Mathu-code.github.io`
4. Remove conflicting `A`, `AAAA`, URL-forwarding, or parking records. DNS should not point
   `mathu.me` to a different hosting provider.
5. Verify both `https://mathu.me` and `https://www.mathu.me` in a private browser window.

The warning in the screenshot is a server certificate/DNS mismatch, so changing HTML or
JavaScript alone cannot remove it; the GitHub Pages and DNS settings above are required.

---

## 📬 Connect

- **Website:** [mathu.me](https://mathu.me/)
- **GitHub:** [@Mathu-code](https://github.com/Mathu-code)
- **Twitter / X:** [@MassMathuran](https://x.com/MassMathuran)
- **Email:** `mathurankoneswaran@gmail.com`
