/**
 * @description : 设置主题
 * @param {String} type
 * @result : themeName => document attr
 */
export function setTheme(themeName = 'light') {
  window.document.documentElement.setAttribute('theme', themeName)
}

export function getTheme() {
  return window.document.documentElement.getAttribute('theme')
}
