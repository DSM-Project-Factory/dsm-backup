import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config'

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './app/**/*.tsx',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '!../../packages/ui/node_modules/**/*',
  ],
  presets: [sharedConfig],
}

export default config
