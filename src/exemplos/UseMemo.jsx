/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useMemo } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export default (props) => {
    const [dados, setDados] = useState({
        nome: "",
        email: "",
        senha1: "",
        senha2: "",
    });

    const handleInputChange = (e) => {
        setDados({
            ...dados,
            [event.target.name]: event.target.value,
        });
        console.log(dados);
    };

    function ValidaSenha({ senha }) {
        console.log("valida senha");
        if (senha === "") {
            return 'preencha o campo';
        }

        if (senha.length <= 5) {
            return 'Senha com no minimo 6 caracteres';
        }

        return 'Senha valida';
    }

    const validaSenha = useMemo(
        () => 
        <ValidaSenha senha={dados.senha1}/>, [dados.senha1]
   );

function ComparaSenhas({senha1, senha2}){
    if(senha2 === ''){
         return '';
    }
    if(senha1 === senha2){
        return 'senha confere'
    }else{
        return 'senha não conferem'
    }
   
}

const compara = useMemo(
    () => <ComparaSenhas senha1={dados.senha1} senha2={dados.senha2}/>, [dados.senha1, dados.senha2]
)

    return (
        <>
            <PageTitle title="Formulários" subtitle="estado dinamico" />
            <SectionTitle title="Exemplo 01" />
            <div className="center">
                <form>
                    <input
                        type="text"
                        name="nome"
                        placeholder="nome"
                        value={dados.nome}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={dados.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="senha1"
                        placeholder="senha"
                        value={dados.senha1}
                        onChange={handleInputChange}
                    />
                    <br />
                    
                    <span>{validaSenha}</span>
                    <br />
                    <input
                        type="password"
                        name="senha2"
                        placeholder="senha"
                        value={dados.senha2}
                        onChange={handleInputChange}
                    />
                    <br />
                    <span>{compara}</span>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
};
