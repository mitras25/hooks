/* eslint-disable import/no-anonymous-default-export */
import React, {useContext} from 'react'
import { data } from '../components/Data'
import {MeuContexto} from './CreatContext'



export default (props) =>{
    const filho = useContext(MeuContexto)
    return(
        <>
        <h3>componente Filho</h3>
        <p>{filho.preco}</p>
        
        </>
    )
}