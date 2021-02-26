import React from 'react'
import Dark from './Dark'
import Light from './Light'

const ThemeIcon = ({selectedTheme}) => {
  return (
    <div>
      {selectedTheme === 'dark' ? <Dark /> : <Light />}
    </div>
  )
}

export default ThemeIcon
