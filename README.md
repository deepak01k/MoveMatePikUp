# MoveMate PikUp - Pickup & Transport Website

A modern, minimal, high-conversion website for a pickup and transport business stationed live in **Bokaro Steel City & Dhanbad**, delivering to **anywhere across Jharkhand, Bihar, and West Bengal**. Built with the **Stitch Design System**, mobile-first tactile utility, and comprehensive **SEO, AEO, and GEO** optimization.

---

## 🌟 Operational Model & Service Scope

1. **Live Pickup Bases (Immediate 20–35 Min Arrival)**:
   - **Bokaro Steel City**: Sector 1 to 12, Chas, City Centre, Co-operative Colony, Bokaro Thermal, Bermo, Phusro, Gomia, Chandankiyari (PINs 827001–827014).
   - **Dhanbad Coalfield Hub**: Bank More, Saraidhela, Hirapur, Jharia, Katras, Govindpur, Nirsa, Sindri, Barwadda, Putki, Gomoh (PINs 826001–828205).

2. **Delivery Scope (Anywhere in 3 States)**:
   - **Across Jharkhand**: Local moves in Bokaro & Dhanbad + linehauls to Ranchi, Jamshedpur (Tatanagar), Hazaribagh, Giridih, Deoghar, Ramgarh, Koderma, Chaibasa.
   - **Across West Bengal**: Asansol (45 mins via NH 19 GT Road), Durgapur, Raniganj, Purulia, Bankura, Kolkata, Howrah, Bardhaman, Siliguri.
   - **Across Bihar**: Gaya, Patna, Bihar Sharif, Bhagalpur, Muzaffarpur, Darbhanga, Begusarai, Purnia.

3. **Stitch Design System**:
   - Modern functional minimalism tailored for logistics and mobile interaction.
   - Clean typographic hierarchy using **Plus Jakarta Sans** and **Material Symbols Outlined**.
   - Balanced color palette: Deep Slate (`#0F172A`, `#1E293B`) foundations with energetic Emerald (`#10B981`) primary actions.
   - Glare-resistant neutral canvas (`#F8FAFC`) with crisp tactile card boundaries (`#E2E8F0`).

4. **Interactive Features**:
   - **Interactive Route & Location Checker**: Verifies whether an entered location is a **Live Pickup Station (Bokaro & Dhanbad)** or a **Direct Delivery Destination (Jharkhand, Bihar, West Bengal)** with instant WhatsApp continuation.
   - **60-Second Quick Enquiry Form**: Complete form validation with an **Instant Interactive Confirmation Modal** that generates a reference ID (`#MM-BKDH-xxxx`) and pre-fills WhatsApp with all job details.
   - **Mobile Sticky Action Dock**: Persistent bottom conversion bar on mobile screens with one-tap *Call Now* (`tel:+919876543210`) and *WhatsApp* buttons.

5. **SEO, AEO & GEO Optimization**:
   - **SEO**: Semantic HTML5, descriptive meta tags, OpenGraph & Twitter Cards, canonical URL, clean heading hierarchy, `robots.txt`, and `sitemap.xml`.
   - **AEO (Answer Engine Optimization)**: Embedded Schema.org `FAQPage` and `HowTo` structured data to empower Google AI Overviews, Perplexity, and conversational AI search engines to directly extract answers.
   - **GEO (Generative Engine Optimization & Geo-Targeting)**: `MovingCompany` schema with coordinates for Bokaro & Dhanbad, `areaServed` array for Jharkhand, Bihar, and West Bengal, `geo.region` (`IN-JH;IN-BR;IN-WB`), and `geo.placename`.

---

## 🛠️ Project Structure

```
MoveMatePikUp/
├── index.html            # Main responsive single-page website
├── config.js             # Centralized business configuration (editable)
├── business-config.json  # Headless/CMS compatible JSON configuration
├── styles.css            # Custom tactile animations, print & accessibility styles
├── app.js                # Interactive logic (rate calculator, route checker, enquiry modal)
├── robots.txt            # Search engine crawler directives
├── sitemap.xml           # XML sitemap for search engines
├── stitch_reference/     # Stitch-generated reference designs (Mobile & Desktop)
└── README.md             # Documentation
```

---

## ✏️ How to Edit Business Information Without Redesigning

All contact details, phone numbers, WhatsApp links, operating hours, cities, services, and pricing can be updated in `config.js` without touching HTML or CSS layout:

```javascript
// config.js
const BUSINESS_CONFIG = {
  business: {
    name: "MoveMate PikUp",
    phone: "+91 98765 43210",
    phoneRaw: "tel:+919876543210",
    whatsappNumber: "919876543210", // E.164 without '+'
    email: "dispatch@movematepikup.com",
    operatingHours: {
      days: "Monday – Sunday",
      hours: "7:00 AM – 9:00 PM IST"
    }
  },
  // Update live pickup bases, delivery scope, pricing, fleet, or supported PINs below...
};
```

---

## 🚀 How to Run & Preview

Open `index.html` directly in any web browser, or launch a lightweight local server:

```powershell
# Using npx serve
npx serve .

# Or using Python
python -m http.server 3000
```

Open `http://localhost:3000` to view the website.
