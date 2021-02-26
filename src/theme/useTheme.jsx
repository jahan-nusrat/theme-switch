import { useEffect, useState } from 'react'
import _ from 'lodash'
import { getFromLocalStorage, setToLocalStorage } from '../utils/storage'

const useTheme = () => {
  const themes = getFromLocalStorage('themes');
  const [theme, setTheme] = useState(themes.data.light)
  const [loading, setLoading] = useState(false)
  const setMode = mode => {
    setToLocalStorage('theme', mode);
    setTheme(mode)
  }
  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  }
  useEffect(() => {
    const localTheme = getFromLocalStorage('theme')
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    setLoading(true);
  },[])
  return {
    theme,
    loading,
    setMode,
    getFonts
  }
}

export default useTheme
