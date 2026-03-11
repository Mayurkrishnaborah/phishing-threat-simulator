<p align="center">
  <img src="https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/PRs-welcome-orange?style=for-the-badge" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/emails-5%20scenarios-purple?style=for-the-badge" alt="5 Scenarios" />
</p>

<h1 align="center">🛡️ Phishing Threat Simulator</h1>

<p align="center">
  <strong>An interactive educational tool that trains you to spot phishing emails by clicking on red flags in realistic email simulations.</strong>
</p>

<p align="center">
  <a href="https://mayurkrishnaborah.github.io/phishing-threat-simulator/">🌐 Live Demo</a> ·
  <a href="#-features">✨ Features</a> ·
  <a href="#-getting-started">🚀 Get Started</a> ·
  <a href="#-email-scenarios">📧 Scenarios</a>
</p>

---

## 🔍 About

**Phishing Threat Simulator** is a browser-based training platform that places you inside a simulated inbox with 5 realistic phishing emails. Your job is to click on the red flags — spoofed domains, urgency tactics, malicious links, and more — to learn how attackers trick people in the real world.

Every click reveals a **plain-English explanation** of why that element is dangerous, so anyone — not just tech experts — can learn to protect themselves.

> No real credentials are ever collected. This is purely educational.

---

## ✨ Features

| Feature | Description |
|---|---|
| **5 Email Scenarios** | Password reset, prize scam, fake delivery, CEO impersonation, bank fraud |
| **37 Clickable Red Flags** | Each with a beginner-friendly explanation of the trick used |
| **Real-Time Risk Score** | Animated gauge tracks your detection progress per email |
| **Detection Log** | Detailed log entries with severity ratings (Critical / High / Medium) |
| **Learn Section** | 6 simple tips anyone can understand — "Check the Sender", "Never Pay to Win", etc. |
| **Training / Test Mode** | Toggle hints on or off to challenge yourself |
| **Scan Report** | Letter grade (A+ → D) with detected vs. missed flags and next steps |
| **Progress Tracking** | Per-email progress bars + overall completion across all 5 scenarios |
| **Visual Effects** | Floating particles, scan lines, parallax scrolling, glassmorphism |

---

## 📧 Email Scenarios

| # | Scenario | Category | Difficulty | Flags |
|---|---|---|---|---|
| 1 | 🔑 Password Reset | Credential Theft | Beginner | 8 |
| 2 | 🎁 Prize Winner | Advance Fee Fraud | Beginner | 7 |
| 3 | 📦 Package Delivery | Smishing / Phishing | Intermediate | 7 |
| 4 | 👔 CEO Urgent Request | Business Email Compromise | Advanced | 7 |
| 5 | 🏦 Bank Security Alert | Financial Phishing | Intermediate | 8 |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **Tailwind CSS** (CDN) | Utility-first styling with custom dark theme |
| **Vanilla JavaScript** | All interactivity — zero frameworks, zero dependencies |

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mayurkrishnaborah/phishing-threat-simulator.git
   cd phishing-threat-simulator
   ```

2. **Open in browser**
   ```bash
   # Option A — double-click to open
   start index.html

   # Option B — local server (recommended)
   npx -y http-server . -p 8080
   # then visit http://localhost:8080
   ```

3. **Start training** — select an email from the inbox, then click on suspicious elements.

> No build step. No `npm install`. Just open and learn.

---

## 📁 Project Structure

```
phishing-threat-simulator/
├── index.html      # 3-column dashboard layout
├── app.js          # 5 email scenarios, flag detection, scoring, modals
├── styles.css      # Particles, scan lines, parallax, glow effects
├── LICENSE         # MIT License
└── README.md
```

---

## 🎓 Who Is This For?

- **Students & beginners** learning about online safety
- **Teachers & trainers** running cybersecurity awareness workshops
- **Companies** looking for a simple phishing awareness exercise
- **Developers** wanting a portfolio project that demonstrates frontend skills
- **Anyone** who wants to get better at spotting scam emails

---

## 🤝 Contributing

Contributions welcome! Ideas for improvements:

- Add new email templates (invoice scams, social media phishing, SMS phishing)
- Add a timed challenge mode
- Add multilingual support
- Improve mobile responsiveness
- Add more educational content

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Mayurkrishnaborah">Mayur Krishna Dev Borah</a>
</p>
<p align="center">
  <sub>Built for educational purposes only. No real credentials are collected.</sub>
</p>
