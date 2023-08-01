import { PalleteVariablesScale } from './variables.types'

export type ColorScale =
  | 'blue'
  | 'green'
  | 'yellow'
  | 'red'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'gray'

export type PalleteScale =
  | 'base'
  | 'hover'
  | 'pressed'
  | 'border'
  | 'background'

export type BaseScale =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'neutral'

export type BackgroundScale =
  | 'backgroundPrimary'
  | 'backgroundSecondary'
  | 'border'

export type TextScale =
  | 'content1'
  | 'content2'
  | 'content3'
  | 'whiteInverted'
  | 'blackInverted'

export type DefaultSchemaColors = {
  [key in DefaultSchema]: string
}

export type ColorScheme = 'light' | 'dark'

export type DefaultSchema = 'background-color' | 'color'

export type ColorsTheme<T extends ColorScale> = {
  [key in PalleteVariablesScale<T>]: string
}
// We map all the colors combinations
export type PalleteMap = `${ColorScale}-${PalleteScale}`

export type PalleteTheme = {
  [key in PalleteMap]: string
}

export type BackgroundTheme = {
  [key in BackgroundScale]: string
}

export type BaseTheme = {
  [key in BaseScale]: string
}

export type TextTheme = {
  [key in TextScale]: string
}

export type ColorsMap = PalleteTheme & BackgroundTheme & BaseTheme & TextTheme

export type Theme = {
  themeName: string
  colorScheme: ColorScheme
  prefersColorScheme: boolean
  colors: ColorsMap
}

export type OptionalTheme = RecursivePartial<Theme>

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}
