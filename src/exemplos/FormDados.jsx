/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export default (props) => {
    const [dados, setDados] = useState({
        nome: "",
        email: "",
        password:''
    });

    const[confirm, setConfirm]= useState('')

    const handleInputChange = (e) => {
        setDados({
            ...dados,
            [event.target.name]: event.target.value,
        });
    };

    function enviarDados(event) {
        setConfirm(`Dados Enviados! ${dados.nome} email: ${dados.email} `)
        event.prevent.Default();
    }

    return (
        <>
            <PageTitle title="Formulários" subtitle="estado dinamico" />
            <SectionTitle title="Exemplo 01" />
            <div className="center">
                <form onSubmit={enviarDados}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="nome"
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleInputChange}
                    />
                     <input
                        type="password"
                        name="password"                        placeholder="senha"
                        onChange={handleInputChange}
                    />
                    <br />
                    <br />
                    <button type="submit">Enviar</button>
                </form>
                <p>{confirm}</p>
            </div>
        </>
    );
};
