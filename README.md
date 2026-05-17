# Universal Smart Autofill Chrome Extension

A semantic autofill Chrome extension that intelligently detects and fills form fields across websites using a reusable user profile.

---

## Features

- Semantic field detection
- Smart autofill system
- Floating autofill panel
- Profile-based data storage
- React-friendly autofill handling
- Modular architecture

---

## Supported Fields
- Full Name
- First Name
- Last Name
- Email
- Phone
- Address
- City
- Pincode

---

## Project Structure

```text
AUTOFILLEXTEN/
│
├── content/
│   ├── autofill.js
│   ├── classifier.js
│   ├── main.js
│   ├── matcher.js
│   ├── scanner.js
│   └── ui.js
│
├── popup/
│   ├── popup.css
│   ├── popup.html
│   └── popup.js
│
├── manifest.json
└── README.md
```

---

## How It Works

1. User saves profile data in popup
2. Extension scans webpage forms
3. Semantic classifier detects field meanings
4. Matching engine maps fields with profile data
5. Autofill engine fills the form

---

## Technologies Used

- JavaScript
- Chrome Extension Manifest V3
- DOM APIs
- Chrome Storage API

---

## Installation

1. Download the repository
2. Open Chrome
3. Go to:

```text
chrome://extensions/
```

4. Enable Developer Mode
5. Click "Load unpacked"
6. Select the project folder

---

## Usage

1. Open extension popup
2. Save your profile details
3. Open any supported form page
4. Click the floating "Fill All" button

---

## Current Limitations

- Limited Shadow DOM support
- Some dynamic React forms may fail
- No iframe support
- Semantic detection still heuristic-based

---

## Future Improvements

- Confidence scoring
- AI-assisted field classification
- Dynamic form rescanning
- Multiple user profiles
- Better semantic inference
- Chrome Web Store release

For scale up:
add new field at classifier,popup.html,popup.js