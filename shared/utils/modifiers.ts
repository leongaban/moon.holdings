import styles from '../../coinStyles.json'
import { IAsset, ICoinStyle, IDisableCheck } from '../types'
import { defaultSquareStyle } from '../models'

export const capitalizeFirstLetter = (word: string) =>
  word && word.charAt(0).toUpperCase() + word.slice(1)

// check if k is a key of obj
function isKeyof<T>(k: keyof any, obj: T): k is keyof T {
  return k in obj
}

// Add style to coin square
export const setStyle = (symbol: string): ICoinStyle => {
  const symbolLowerCase = symbol.toLowerCase()
  return isKeyof(symbolLowerCase, styles) ? styles[symbolLowerCase] : defaultSquareStyle
}

export const coinHasLightBg = (symbol: string) => {
  const symbolLowerCase = symbol.toLowerCase()
  return isKeyof(symbolLowerCase, styles) ? !!styles[symbolLowerCase].lightBg : null
}

export const styleModifier = (id: string) =>
  (coinHasLightBg(id)
    ? `square bg-${id.toLowerCase()} bg-lite`
    : `square bg-${id.toLowerCase()}`)

export const setSearchBtnDisabled = (disableCheck: IDisableCheck | null) => {
  if (disableCheck) {
    const { type, position, selected, exchange, exchanges } = disableCheck
    const exchangeArrayExists = selected && Array.isArray(exchanges) && exchanges.length > 0

    if (type === 'portfolio') {
      if (position && position > 0) return false

      if (!selected || exchangeArrayExists && !exchange) return true

      if (position === 0) return true
    }

    else if (type === 'watchlist') {
      if (!selected || exchangeArrayExists && !exchange) return true
    }

    return false
  }

  return false
}

// Convert Array to Object (Coverts Portfolio into localStorage compatible object)
export const arrayToObject = (array: IAsset[]) =>
  array.reduce((obj: any, item: IAsset) => {
    obj[item.currency] = item
    return obj
  }, {})

/*
  http://bit.ly/LightenDarkenColor
  positive numbers to Lighten
  negative numbers to Darken
*/
export const adjustHEX = (color: string, percent: number) => {
  const num = parseInt(color, 16)
  const r = (num >> 16) + percent
  const b = ((num >> 8) & 0x00FF) + percent
  const g = (num & 0x0000FF) + percent
  const newColor = g | (b << 8) | (r << 16)
  return `#${newColor.toString(16)}`
}
