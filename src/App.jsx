import React, { useEffect, useState } from 'react'
import useTheme from './theme/useTheme'
import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';

const App = () => {
  const {theme, loading, getFonts} = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)
  useEffect(() => {
    setSelectedTheme(theme)
  }, [loading])

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    })
  })
  return (
    <React.Fragment>
      {
        loading && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
        </ThemeProvider>
      }
    </React.Fragment>
    
  )
}

export default App
