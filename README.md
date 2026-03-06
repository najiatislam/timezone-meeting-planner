<h1 align="center">
  <br>
  ⏱️ Chronos
  <br>
</h1>

<h4 align="center">A smart meeting optimizer for global teams — not just another timezone viewer.</h4>

<p align="center">
  <a href="https://najiatislam.github.io/chronos">Live Demo</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#tech-stack">Tech Stack</a>
</p>

<p align="center">
  <img src="assets/ss1.jpeg" alt="Chronos Dashboard" width="700">
</p>

---

## Why Chronos?

Most timezone tools just show clocks. **Chronos finds the best meeting time automatically.**

| Feature | Basic Timezone Apps | Chronos |
|---------|---------------------|---------|
| View multiple timezones | ✅ | ✅ |
| Dark mode | ❌ | ✅ |
| Drag to set meeting time | ❌ | ✅ |
| Smart overlap detection | ❌ | ✅ |
| Shareable meeting links | ❌ | ✅ |
| Team availability grid | ❌ | ✅ |

---

## Key Features

### 🎯 Smart Meeting Optimizer
Automatically detects overlapping working hours and highlights the best meeting slots.

<img src="assets/ss2.jpeg" alt="Timeline Comparison" width="600">

### 🖱️ Drag & Drop Interface
Click and drag to set meeting times. Resize to adjust duration. No more manual calculations.

### 🌗 Dark / Light Mode
Easy on the eyes, day or night.

### 🔗 Shareable Meeting Links
Share your meeting setup with one URL:
```
?cities=London,Tokyo,New York&meeting=14:00
```
Recipients see cities and time pre-loaded.

### 🌍 90+ Cities Worldwide
Comprehensive timezone database with DST support.

<img src="assets/ss3.jpeg" alt="World Clock" width="600">

---

## Full Feature List

<details>
<summary><b>📊 Timeline Comparison</b></summary>

- Visual 24-hour timeline for each city
- Working hours highlighted (9 AM - 5 PM)
- Overlap detection with time suggestions
- Day/Week view toggle
- Up to 3 meeting slots
</details>

<details>
<summary><b>🕐 World Clock Dashboard</b></summary>

- Pin favorite cities
- Live updates with seconds
- Date display for each timezone
</details>

<details>
<summary><b>⏰ Meeting Countdown</b></summary>

- Track upcoming meetings
- Visual urgency indicators
- Persistent storage
</details>

<details>
<summary><b>👥 Team Directory</b></summary>

- Manage global team members
- Track working hours per person
- Live availability status
</details>

<details>
<summary><b>📅 Holiday Calendar</b></summary>

- 8 countries supported (US, UK, DE, FR, JP, AU, CA, IN)
- Avoid scheduling on holidays
- Filter by year
</details>

<details>
<summary><b>✉️ Meeting Invite Generator</b></summary>

- Auto-convert times for all recipients
- Copy-ready output
- .ics calendar export
</details>

<details>
<summary><b>📆 Availability Windows</b></summary>

- Weekly availability grid
- Multi-person overlap finder
- Interactive cell selection
</details>

---

## How To Use

**Option 1: Try it online**
👉 [najiatislam.github.io/chronos](https://najiatislam.github.io/chronos)

**Option 2: Run locally**
```bash
git clone https://github.com/najiatislam/chronos.git
cd chronos
# Just open index.html in your browser - no build required!
```

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `→` | Move meeting ±30 min |
| `Shift + ←` `→` | Resize meeting |
| `1` `2` `3` | Switch slots |
| `D` | Toggle Day/Week |

---

## Tech Stack

| | |
|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | CSS Variables, Flexbox, Grid |
| **Storage** | localStorage |
| **Fonts** | Inter (Google Fonts) |
| **Build** | None required — zero dependencies |

---

## Project Structure

```
chronos/
├── index.html        # Single-page app
├── css/
│   └── styles.css    # Dark/light themes
├── js/
│   └── app.js        # Core logic (90+ cities)
├── assets/           # Screenshots
├── README.md
└── LICENSE           # MIT
```

---

## Contributing

PRs welcome! Fork → Branch → Commit → PR

---

## License

MIT © [najiatislam](https://github.com/najiatislam)

---

<p align="center">
  <b>Built for remote teams who hate timezone math.</b>
</p>
