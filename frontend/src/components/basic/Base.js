import React from 'react'

import Menu from './Menu';
import './Menu.css'
function Base({description,title,children}) {
    return (
        <div className="getHeight">
          <Menu/>
          
          {children}
          
           
           
            

        </div>
    )
}

export default Base
