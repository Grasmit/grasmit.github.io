# Portfolio Website with Internationalization

This portfolio website supports both English and German languages with a smooth switching experience.

## Features

### 🌐 Bilingual Support
- **English (EN)**: Default language
- **German (DE)**: Full German translation
- Language preference is saved in localStorage
- Browser language detection for initial language selection

### 🎨 User Interface
- Clean language switcher in navigation bar
- Smooth transitions during language changes
- Responsive design that works on all devices
- Visual feedback with hover effects and active states

### 📱 Responsive Design
- Language switcher adapts to different screen sizes
- Mobile-optimized layout
- Tablet and desktop support

## Technical Implementation

### Files Structure
```
portfolio/
├── index.html              # Main HTML with data-translate attributes
├── styles.css              # CSS with language switcher styles
├── translations.js         # Translation data and switching logic
└── resumes/
    ├── Grasmit_Resume.pdf      # English resume
    └── Grasmit_Lebenslauf.pdf  # German resume
```

### How It Works

1. **Translation Data**: All text content is stored in `translations.js` with keys for EN and DE
2. **HTML Attributes**: Elements use `data-translate` attributes to identify translatable content
3. **Dynamic Updates**: JavaScript updates content based on selected language
4. **Resume Downloads**: Different resume files for each language
5. **Persistence**: Language preference is saved and restored on page reload

### Adding New Translations

To add new translatable content:

1. Add a `data-translate="keyName"` attribute to the HTML element
2. Add the translation keys to both `en` and `de` objects in `translations.js`
3. Update the `updatePageContent()` function to handle the new element

Example:
```html
<h2 data-translate="newSection">New Section</h2>
```

```javascript
// In translations.js
en: {
    newSection: "New Section",
    // ... other translations
},
de: {
    newSection: "Neuer Bereich",
    // ... other translations
}
```

### Browser Compatibility
- Works in all modern browsers
- Uses localStorage for persistence
- Graceful fallback to English if translation is missing

### Performance
- Lightweight implementation with minimal JavaScript
- No external libraries required
- Fast language switching with smooth transitions

## Usage

1. **Language Detection**: On first visit, the site detects browser language
2. **Manual Switching**: Users can click EN/DE buttons in the navigation
3. **Persistence**: Selected language is remembered for future visits
4. **Resume Downloads**: Automatically serves correct language version

## Customization

### Adding More Languages
1. Add new language object to `translations`
2. Add new button to language switcher
3. Create translated resume file
4. Update language detection logic

### Styling the Language Switcher
The language switcher can be customized via CSS classes:
- `.language-switcher`: Container
- `.lang-btn`: Individual language buttons
- `.lang-btn.active`: Active language button
- `.lang-divider`: Separator between buttons

## Notes

- **Resume Files Setup**: You need to add your actual resume files:
  - Place your English resume as: `resumes/Grasmit_Resume.pdf`
  - Place your German resume as: `resumes/Grasmit_Lebenslauf.pdf`
  - The download button will show an error if files are missing
  - Remove the placeholder README files once you add your actual PDFs
- All skill tags and technical terms remain in English as they are universally understood
- Company names and dates remain unchanged across languages
- The site gracefully handles missing translations by falling back to English

## Setup Instructions

1. **Create Resume Files**:
   ```bash
   # Navigate to your portfolio directory
   cd /home/grasmit/project/portfolio/resumes/
   
   # Add your resume files (replace placeholder files)
   # - Grasmit_Resume.pdf (English version)
   # - Grasmit_Lebenslauf.pdf (German version)
   ```

2. **Test Downloads**: 
   - Click the download button to ensure files work
   - Switch languages to test both resume versions
   - The system will alert you if files are missing
