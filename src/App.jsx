import React, { useEffect, useState } from 'react'
import useTheme from './theme/useTheme'
import WebFont from 'webfontloader';
import Switch from "react-switch";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import { Container, SwitchDiv, Text } from './styles/Style';
import { getFromLocalStorage } from './utils/storage';
import ThemeIcon from './Icon/themeIcon'

const App = () => {
  const themes = getFromLocalStorage('themes')
  const {theme, loading, getFonts, setMode} = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)
  useEffect(() => {
    setSelectedTheme(theme)
  }, [loading, theme])

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    })
  });

  const onToggleTheme = () => {
    if(selectedTheme.theme_name === 'dark') {
      setMode(themes.data.light);
    } else {
      setMode(themes.data.dark);
    }
  }

  return (
    <React.Fragment>
      {
        loading && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container align='center' style={{fontFamily: selectedTheme.font}}>
            <Text font='title'>Theme Switch</Text>
            <Text font='paragraph'><p>This is a theming system with a Theme Switcher and Theme Builder.
            Do you want to see the source code?</p></Text>
            <a href="https://github.com/jahan-nusrat/theme-switch" target="_blank" rel="noreferrer">Click here.</a>
            <SwitchDiv>
              <Text font='dark-text'>Light Mode</Text>
              <Switch
                onChange={onToggleTheme}
                checked={selectedTheme.theme_name === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={selectedTheme.colors.button.background_color}
                offColor={selectedTheme.colors.button.background_color}
                offHandleColor={selectedTheme.colors.button.background_color}
                onHandleColor={selectedTheme.colors.button.background_color} 
              />
              <Text style={{marginLeft:'1rem'}} font='dark-text'>Dark Mode</Text>
            </SwitchDiv>
            <ThemeIcon selectedTheme = {selectedTheme.theme_name} />
          </Container>
        </ThemeProvider>
      }
    </React.Fragment>
    
  )
}

export default App
