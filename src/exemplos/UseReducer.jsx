/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useReducer } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export default (props) => {
    const valorInicial = 0;

    function reducer(state, action) {
        switch (action) {
            case "add":
                return state + 1;
            case "dec":
                return state - 1;
            default:
                return 0;
        }
    }

    const [state, dispatch] = useReducer(reducer, valorInicial);

    const produto = {
        nome: "Switch Nintendo",
        preco: 3000,
    };

    function descontos(state, action) {
        switch (action) {
            case "10":
                return { ...state, preco: state.preco - state.preco * 0.1 };
            case "25":
                return { ...state, preco: state.preco - state.preco * 0.25 };
            default:
                return { ...state, preco: 3000 };
        }
    }

    const [desconto, dispach2] = useReducer(descontos, produto);

    return (
        <>
            <PageTitle title="Use Reducer" subtitle="" />
            <SectionTitle title="Exercicio 01" />
            <div className="center">
                <p>{state}</p>
                <button onClick={() => dispatch("add")}>ADD</button>
                <button onClick={() => dispatch("dec")}>DEC</button>
                <button onClick={() => dispatch("")}>CLEAR</button>
            </div>

            <SectionTitle title="Exercicio 02" />
            <div className="center">
                <p>{desconto.nome}</p>
                <p>{desconto.preco}</p>
                <button onClick={() => dispach2("10")}>10% Desconto</button>
                <button onClick={() => dispach2("25")}>25% Desconto</button>
                <button onClick={() => dispach2("")}>cancela</button>
            </div>

       
        </>
    );
};
