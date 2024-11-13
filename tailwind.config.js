/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			main: '#6338F6',
  			sidebar: '#F8F9FB',
  			textColors: {
  				primary: '#141B27',
  				secondary: '#7F8EA3',
  				link: '#6338F6',
  				danger: '#E91E63'
  			},
  			borderColors: {
  				primary: '#E8E8E9'
  			},
  			danger: '#E91E63'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		sm: '640px',
  		base: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px',
  		'3xl': '1700px',
  		'4xl': '1920px'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
