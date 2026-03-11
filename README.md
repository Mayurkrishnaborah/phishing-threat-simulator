<p align="center">
  <img src="https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/PRs-welcome-orange?style=for-the-badge" alt="PRs Welcome" />
</p>

<h1 align="center">🛡️ Phishing Threat Simulator</h1>

<p align="center">
  <strong>An interactive educational tool designed to raise awareness about cyberscamming by training users to identify visual red flags in social engineering attacks.</strong>
</p>

---

## 🔍 About

**Phishing Threat Simulator** is a browser-based training environment that places users inside a simulated email client containing a realistic phishing email. Users must identify hidden red flags — such as spoofed sender domains, urgency tactics, and malicious links — by clicking directly on suspicious elements.

Every interaction provides immediate visual feedback, a real-time risk score, and detailed explanations of why each element is dangerous. The goal is to build practical threat-detection instincts in a safe, gamified setting — no real credentials are ever collected.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Simulated Email Client** | A realistic inbox UI displaying a fake phishing email (IT password-reset scam) |
| **7 Clickable Red Flags** | Spoofed sender, urgent subject, generic greeting, false deadline, lockout threat, malicious button, and lookalike URL |
| **Real-Time Risk Score** | Animated SVG gauge and progress bar that update as threats are detected |
| **Detection Log** | Live sidebar log with detailed explanations and severity ratings (Critical / High / Medium) |
| **Complete Scan Report** | Modal summarizing performance with a letter grade (A+ → D), detected vs. missed flags, and security recommendations |
| **One-Click Reset** | Instantly restart the exercise for repeated training |
| **Hover Tooltips** | Contextual tips appear on hover for each red flag before clicking |
| **Responsive Design** | Two-column layout on desktop, single-column stack on mobile |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure and accessibility |
| **Tailwind CSS** (CDN) | Utility-first styling with a custom dark enterprise theme |
| **Vanilla JavaScript** | Event-driven interactivity — no frameworks, no dependencies |

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/phishing-threat-simulator.git
   cd phishing-threat-simulator
   ```

2. **Open in browser**
   ```bash
   # Option A — simply open the file
   open index.html        # macOS
   start index.html       # Windows

   # Option B — use a local server (recommended for best results)
   npx -y http-server . -p 8080
   # then visit http://localhost:8080
   ```

3. **Start training** — click on suspicious elements in the phishing email to reveal red flags.

> No build step, no `npm install`, no compilation. Just open and learn.

---

## 📁 Project Structure

```
phishing-threat-simulator/
├── index.html      # Dashboard layout, email client UI, and modal markup
├── app.js          # Core interaction logic — event listeners, scoring, and scan report
├── styles.css      # Additional custom styles (if needed)
└── README.md       # You are here
```

---

## 🎓 Educational Value

This tool is ideal for:

- **Cybersecurity awareness training** in schools, universities, or workplaces
- **Workshops and presentations** on social engineering and phishing
- **Self-study** for anyone wanting to sharpen their threat-detection skills
- **Portfolio projects** demonstrating frontend development and security awareness

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you'd like to:

- Add new phishing email templates (e.g., invoice scams, delivery notifications)
- Implement a difficulty selector or timed mode
- Add multilingual support
- Improve accessibility

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Built for educational purposes only. No real credentials are collected.</sub>
</p>
# phishing-threat-simulator
