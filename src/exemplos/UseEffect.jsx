/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export default (props) => {
    const [texto, setTexto] = useState("inicial");
    const [count, setCount] = useState(1);
    const [verifica, setVerifica] = useState("me chamou");
    const [status, setStatus] = useState("impar");

    useEffect(() => {
        setVerifica(`Reindelizou ${count} vezes`);
    }, [count]);

    useEffect(() => {
        setStatus(count % 2 === 0 ? "par" : "impar");
    }, [count]);

    return (
        <>
            <PageTitle title="useEffect" subtitle="Executa efeitos" />
            <SectionTitle title="Exemplo" />
            <div className="center">
                <p>Texto: {texto}</p>
                <p>Render quantas vezes: {count}</p>
                <button
                    onClick={() => {
                        setTexto("Trocou");
                        setCount(count + 1);
                    }}
                >
                    Troca
                </button>
                <p>estado Verifica:{verifica}</p>
                <p>Status de count: {status}</p>
            </div>
        </>
    );
};
