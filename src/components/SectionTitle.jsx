/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './SectionTitle.css'


export default (props) =>{
    return(
       <div className='SectionTitle'>
           <h3>{props.title}</h3>
       </div>
    )
}