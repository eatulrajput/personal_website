## 📬 Contributing Guidelines

First of all, thank you for taking the time to contribute to the **DEV // WIRED** project! ❤️

Whether you are resolving bug logs, introducing features, refining reference manuals, or correcting typography — every patch helps keep the chronicle accurate.

---

### 🛠️ Development Setup & Workflow

1. **Fork the Repository**
   - Click the **Fork** button at the top-right of this repository.
   - This creates a copy of the codebase under your own profile.

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/personal_website.git
   cd personal_website
   ```

3. **Install Dependencies**
   We recommend using **Bun** to manage packages, matching our Next.js 16 workflow:
   ```bash
   bun install   # or npm install
   ```

4. **Create a Local Topic Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Implement Changes & Compile**
   - Keep your components modular, reusable, and type-safe using **TypeScript**.
   - Make sure your styles align with our custom theme attributes (`data-theme="light"`, `"dark"`, `"paper"`).
   - Test compilation locally before committing:
     ```bash
     bun run build   # Verify there are no TS compiler or Next.js build exceptions
     ```

6. **Format Commit Messages**
   Use standard conventional commits (e.g., `feat: add custom marquee toggle`, `fix: resolve Spline dynamic hydration error`).

7. **Push & Create Pull Request (PR)**
   ```bash
   git push origin feature/your-feature-name
   ```
   Submit the pull request detailing the specific changes, visual adjustments, or test results.

---

### 📌 Review Guidelines

* **Animation Checks**: Any visual elements using motion parameters must respect the `paper` theme and halt completely when `[data-theme="paper"]` is set.
* **Typing Checks**: Always ensure proper typing checks and interface files are declared under `src/` to prevent CI pipeline compiler issues.
* **Aesthetics**: Maintain the high-contrast newsprint column aesthetic (borders, lines, grids, dropped-capitals).

---

### 🙏 Code of Conduct

By contributing to this repository, you agree to treat everyone with respect, kindness, and professionalism as outlined in our [Code of Conduct](./CODE_OF_CONDUCT.md).
