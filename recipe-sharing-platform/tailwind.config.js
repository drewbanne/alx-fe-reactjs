    /** @type {import('tailwindcss').Config} */
    module.exports = {
      // Configure Tailwind to scan these files for utility classes.
      // This ensures only the necessary CSS is generated in your final build.
      content: [
        './src/**/*.{js,jsx,ts,tsx}', // Look for Tailwind classes in all JS/JSX/TS/TSX files in src/
        './public/index.html',        // Also look in your main HTML file
      ],
      // 'darkMode: false' means dark mode is not enabled by default.
      // You can change this to 'media' (prefers-color-scheme) or 'class' (manual toggle) later.
      darkMode: false,
      theme: {
        extend: {}, // Use 'extend' to add to Tailwind's default theme without overwriting it.
      },
      plugins: [], // Add any Tailwind plugins here (e.g., @tailwindcss/forms).
    };
    