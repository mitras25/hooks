/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useRef } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export default (props) => {
    const [texto, setTexto] = useState("inicial");
    const refTexto = useRef(texto);

    const inputRef = useRef()

    function foco(){
        inputRef.current.focus()
    }

    return (
        <>
            <PageTitle
                title="UseRef"
                subtitle="Guarda Elemento como referencia ate um fim de ciclo"
            />
            <SectionTitle title="Exemplo 01" />
            <div className="center">
                <input onChange={(e) => setTexto(e.target.value)} />

                <p>Texto: {texto}</p>
                <p>valor de refTexto: {refTexto.current}</p>
            </div>
            
            <SectionTitle title="Exemplo 02" />
            <div className="center">
                <input name='nome' ref={inputRef} />
                <button onClick={foco}>Clica</button>              
            </div>



        </>
    );
};
