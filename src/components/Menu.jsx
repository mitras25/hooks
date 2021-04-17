/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

export default (props) => {
    return(
      <div className='Menu'>
          <nav>
              <ul>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/useState'>useState</Link>
                  </li>
                  <li>
                      <Link to ='/useEffect'>useEffect</Link>
                  </li>
                  <li>
                      <Link to ='/useRef'>useRef</Link>
                  </li>
                  <li>
                      <Link to ='/formDados'>formDados</Link>
                  </li>
                  <li>
                      <Link to ='/useMemo'>useMemo</Link>
                  </li>
                  <li>
                      <Link to ='/creatContext'>CreatContext</Link>
                  </li>
                  <li>
                      <Link to ='/useReducer'>UseReducer</Link>
                  </li>
              </ul>
          </nav>

      </div>
    )
}