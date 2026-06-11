/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		fontFamily: {
  			serif: ['"Playfair Display"', 'Georgia', 'serif'],
  			sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  		},
  		colors: {
  			navy: {
  				DEFAULT: '#05192D',
  				50: '#E8EBF0',
  				100: '#C5CCD9',
  				200: '#8B99B3',
  				300: '#51668D',
  				400: '#1E3A5F',
  				500: '#0A2A4A',
  				600: '#05192D',
  				700: '#030F1A',
  				800: '#020A11',
  				900: '#010509',
  			},
  			mblue: {
  				DEFAULT: '#0066CC',
  				50: '#E6F0FA',
  				100: '#B3D1F2',
  				200: '#80B3E9',
  				300: '#4D94E0',
  				400: '#1A75D7',
  				500: '#0066CC',
  				600: '#0052A3',
  				700: '#003D7A',
  				800: '#002952',
  				900: '#001429',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
