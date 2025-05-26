# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration


---

## Project Development Process

This project is a mobile-first English reading exercise app built with React and Vite, styled using Tailwind CSS.

**Development Milestones:**
1. **Project Setup:**  
   - Initialized with Vite + React
   - Version control using GitHub
   - ESLint and basic code quality tools added

2. **MVP Features:**  
   - Timer and submit logic
   - Scrollable article area
   - Horizontal swipe between questions
   - Vertical scroll for long explanations after submitting

3. **UI & UX Upgrades:**  
   - Modularized components (TimerBar, ArticleReader, BottomPanel, QuestionSwiper, QuestionCard)
   - Tailwind CSS for fast styling and responsiveness
   - Pagination dots always pinned
   - Refined scroll logic for iOS and desktop compatibility

4. **Responsive Design:**  
   - Font size and padding adjusted for device sizes
   - Visual consistency across platforms

**Key Learnings:**  
- Solved complex scroll interaction bugs for iOS and Firefox.
- Maintained a clean, readable codebase with modular design.
- Focused on accessibility and a friendly reading/testing experience.

---

## Developer Cheat Sheet: Font Size Rules

**Font sizes are responsive using Tailwind CSS utilities.**  
Reference for all major components:

| Section                  | Mobile (`text-`) | Tablet (`sm:`) | Desktop (`md:`/`lg:`) |
|--------------------------|------------------|----------------|-----------------------|
| App Title/Header         | `xl`             | `2xl`          | `3xl`                 |
| Timer/Submit Button      | `base`           | `lg`           | `xl`                  |
| Article Reader (body)    | `base`           | `lg`           | `xl`                  |
| Question Text (`h4`)     | `base`           | `lg`           | `xl`                  |
| Option Text (Buttons)    | `base`           | `lg`           | `xl`                  |
| Explanation Label        | `sm`/`base`      | `base`/`lg`    | `lg`                  |
| Footer Text/Tips         | `xs`/`sm`        | `sm`           | `base`                |

Example usage:
```jsx
<h4 className="text-base sm:text-lg md:text-xl font-semibold ...">
  {question.text}
</h4>
<button className="w-full text-left p-4 text-base sm:text-lg md:text-xl ...">
  {option}
</button>
<div className="text-sm sm:text-base md:text-lg text-gray-600 ...">
  解析：{explanation}
</div>
```

- Use `leading-relaxed` for comfortable line height in paragraphs.
- Always preview on both mobile and desktop before committing font size changes.
