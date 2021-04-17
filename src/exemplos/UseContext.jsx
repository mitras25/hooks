/* eslint-disable import/no-anonymous-default-export */
import React, { useContext }from 'react'
import {MeuContexto} from './CreatContext'
import FilhoDoUseContext from './FilhoDoUseContext'


export default (props) =>{
    const data = useContext(MeuContexto);


    return(
        <>
        <h1>{data.nome}</h1>
        <FilhoDoUseContext />
        
        </>
    )
}