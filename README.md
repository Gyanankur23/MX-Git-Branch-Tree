# 🌳 MX Git-Branch Tree Viewer

Live Demo:

``` https://mx-git-branch-tree.vercel.app/


 
GitHub Repo: ``` github.com/Gyanankur23/mx-git-branch-tree ```

---

# 🚀 What It Does

The MX Git-Branch Tree Viewer allows users to:

- 📝 Paste any public GitHub repository URL
- 🌲 Visualize the complete folder/file structure as a collapsible tree
- 🌗 Toggle between light and dark mode seamlessly
- 🎨 View a clean, responsive UI powered by React, Tailwind CSS, and Vite

This tool is especially useful for developers, students, or recruiters who want a quick peek at a repository’s architecture without cloning it locally.

---

# 🖼️ Project Preview

!Screenshot of MX Git-Branch Tree Viewer <!-- Replace this with an actual screenshot if you wish -->

---

# 🧠 Tech Stack

Layer  Technology
UI Library  React 18
Build Tool  Vite
Styling  Tailwind CSS
GitHub API  REST v3 – GET git/trees
Deployment  Vercel
Dev Tools  ESLint + JSX A11y

---

# 🏗️ Project Structure

`
mx-git-branch-tree/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── NavBar.jsx
│   │   ├── Footer.jsx
│   │   └── TreeView.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .eslintrc.cjs
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
`

---

# ⚙️ Setup Instructions

1. Clone this repo  
   `bash
   git clone https://github.com/Gyanankur23/mx-git-branch-tree.git
   cd mx-git-branch-tree
   `

2. Install dependencies  
   `bash
   npm install
   `

3. Run the development server  
   `bash
   npm run dev
   `

4. Open localhost:5173 to view the app.

---

# 🌑 Light/Dark Mode

- Toggle theme anytime via ☀️/🌙 button in the navbar
- State is saved using localStorage
- Dark theme is powered by darkMode: 'class' in Tailwind

---

# 🔐 Rate Limiting & Considerations

- Uses unauthenticated GitHub API calls, which are limited to 60 requests/hour/IP
- To support higher usage, integrate a GitHub token via .env and set up a proxy (optional)

---

# 📄 License

This project is licensed under the MIT License © 2025 Gyanankur Baruah

---

# 🙌 Author

### Gyanankur Baruah  
✉️ LinkedIn  
🔗 GitHub

---

# 💡 Contributions

Feel free to fork the repo, submit PRs, or open issues.  
Ideas for enhancements:
- Search/filter files by name
- Support for private repos (via token)
- File previews or README renderer

---

### Built with ❤️ by Gyanankur23
