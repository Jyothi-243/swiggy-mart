/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",      // ✅ include this if you have index.html
    "./**/*.js",         // ✅ include all JavaScript files (also works for React components)
    "./**/*.jsx",        // ✅ add this if you're using JSX files
    "./**/*.ts",         // ✅ add this if you're using TypeScript
    "./**/*.tsx"         // ✅ add this if you're using TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
