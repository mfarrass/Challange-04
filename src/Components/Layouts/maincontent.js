import React from 'react'

import './layouts.css'

const MainContent = (props) => {
  return (
    <div className="main_content">
          {props.children}
    </div>
  )
}

export default MainContent