/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Use * to match anything except slashes and hidden files
// Use ** to match zero or more directories
// Use comma separate values between {} to match against a list of options