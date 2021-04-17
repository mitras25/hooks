/* eslint-disable import/no-anonymous-default-export */
import React, { createContext } from "react";
import { data } from "../components/Data";
import UseContext from "./UseContext";
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'

export const MeuContexto = createContext();

export default (props) => {
    return (
        <><PageTitle title='Create context' subtitle='criando contextos'/>
                <SectionTitle title='Exercicio 01' />
            <div className="center">
                
                <MeuContexto.Provider value={data}>
                    <UseContext />
                </MeuContexto.Provider>
            </div>
        </>
    );
};
