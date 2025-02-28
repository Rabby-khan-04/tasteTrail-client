/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			louize: [
  				'Louize',
  				'serif'
  			],
  			louize_italic: [
  				'Louize Italic',
  				'serif'
  			],
  			louize_medium: [
  				'Louize Medium',
  				'serif'
  			],
  			maax: [
  				'Maax',
  				'sans-serif'
  			],
  			maax_medium: [
  				'Maax Medium',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: '#195908',
  			almond: '#fefaef',
  			granny_smith_apple: '#b2d99a',
  			kombu_green: '#2f4230'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
