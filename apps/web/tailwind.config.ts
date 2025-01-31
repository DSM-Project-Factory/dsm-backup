import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config'

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/editor/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '!../../packages/ui/node_modules/**/*',
  ],
  presets: [sharedConfig],
}

export default config
