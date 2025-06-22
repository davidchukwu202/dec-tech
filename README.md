# dec-tech
An energy application 

⚡ DEC TECH – Solar Management & Consult Tool (Fullstack App)

This project is a fullstack web application built to power my solar energy brand, DEC Tech.  
It helps track solar products, size batteries, collect consultation requests, and support customer education — while serving as my portfolio and business platform.

---

🚀 PROJECT PURPOSE

1. Solve real solar customer needs with tech (product tracking, battery sizing, consult forms).
2. Build and showcase fullstack web development skills (Node.js → frontend → Next.js).
3. Grow and monetize my solar brand (DEC Tech) using tools, consults, and educational content.

---

📌 CORE FEATURES

| Feature | Description |
|--------|-------------|
| 🔧 Product Inventory | Store and manage solar panels, batteries, etc. via API |
| 📊 Battery Sizing Tool | Users input their appliances, and the system calculates needed battery size |
| 📥 Consultation Form | Collect and store solar consult requests |
| 🔐 Admin Panel (optional) | Dashboard to view/manage entries |
| 🌐 Client Access | Public interface for customers to test and use tools |

---

🧠 TECH STACK

| Layer | Tool |
|------|------|
| Backend | Node.js, Express, MongoDB (or SQLite for quick setup) |
| Frontend (Stage 1) | HTML, CSS, JS (Vanilla) |
| Frontend (Stage 2) | React |
| Final (Stage 3) | **Next.js** (React + API in one codebase) |
| Deployment | Render (API), Netlify/Vercel (Frontend/Next.js) |

---


📂 PROJECT STRUCTURE (Next.js Final Form)

```bash
dec-tech/
├── pages/
│   ├── index.js           # Homepage (intro + consult CTA)
│   ├── products.js        # Product listing page
│   ├── calculator.js      # Battery calculator
│   ├── pricing.js         # Simple pricing page
│   └── api/
│       ├── products.js    # Product API endpoint
│       └── consultations.js # Consult request endpoint
├── components/
│   └── ProductCard.js     # Reusable product display
├── styles/
│   └── globals.css
├── utils/
│   └── calculatorLogic.js # Appliance-to-battery logic
└── README.md

