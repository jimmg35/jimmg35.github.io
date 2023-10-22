import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [
    require('daisyui'),
    require('tailwind-typewriter')({
      wordsets: {
        en: {
          words: ['software developer', 'researcher', 'student'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        },
        zh: {
          words: ['軟體工程師', '研究者', '學生'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        },
        ru: {
          words: ['разработчик', 'Исследователь', 'студент'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        }
      }
    })
  ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          'base-100': '#f9f9fa',
          primary: '#0055bd'
        }
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#0055bd'
        }
      }
    ]
  }
}
export default config
