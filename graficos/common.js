const getCSS = (variavel) => {
  return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
  color: getCSS('--primary-color'),
  size: 16,
  family: getCSS('--font')
}

import { getCSS, tickConfig } from "./common.js"