import 'styled-components'
import { defaultTheme } from './default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    'pink-500': string;
    'pink-400': string;
    'pink-300': string;
    'pink-200': string;
    'pink-100': string;

    pinkBackground: string;

    'text-primary': string;
    'text-secondary': string;
  }
}