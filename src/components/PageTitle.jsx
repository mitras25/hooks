/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './PageTitle.css'

export default (props) =>{
    return(
        <div className='PageTitle'>
            <h1>{props.title} </h1>
            <p>{props.subtitle}</p>

        </div>
    )
}