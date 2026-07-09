/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Anthropic Claude Official Branding
        claude: {
          dark: '#141413',      // Primary text, dark backgrounds
          light: '#faf9f5',     // Light backgrounds, text on dark
          gray: '#b0aea5',      // Secondary elements
          'gray-light': '#e8e6dc', // Subtle backgrounds
          // Accent colors
          orange: '#d97757',    // Primary accent
          blue: '#6a9bcc',      // Secondary accent
          green: '#788c5d',     // Tertiary accent
        },
        // Legacy primary colors (kept for compatibility)
        primary: {
          50: '#faf9f5',        // Claude light
          100: '#e8e6dc',       // Claude light gray
          500: '#6a9bcc',       // Claude blue
          700: '#4a7aa8',
          900: '#141413',       // Claude dark
        },
        accent: {
          400: '#d97757',       // Claude orange
          500: '#6a9bcc',       // Claude blue
          600: '#788c5d',       // Claude green
        },
        surface: {
          50: '#faf9f5',        // Claude light
          100: '#e8e6dc',       // Claude light gray
          200: '#d9d6cc',
          900: '#141413',       // Claude dark
        },
      },
      fontFamily: {
        // Anthropic Claude Official Fonts
        heading: ['Poppins', 'Arial', 'sans-serif'],
        body: ['Lora', 'Georgia', 'serif'],
        // Fallbacks
        sans: ['Poppins', 'Arial', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        // Heading hierarchy
        'heading-sm': ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        'heading-md': ['20px', { lineHeight: '1.4', fontWeight: '700' }],
        'heading-lg': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-xl': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        // Body text
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
