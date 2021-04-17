/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'


export default (props) => {
//cria estado [ nomeEstado, setNomeEstado]
const [count, setCount] = useState(0);

const [dados, setDados] = useState({
    nome: 'Romero',
    idade: 80
})

function trocarIdade(){
    setDados({
        //impede que os dados que não são alterados se perca
        ...dados,
        idade: 29
    })
}

function add(){
    setCount(count+1)
}


//Crie um estado que tenha marca, modelo e cor com valores aleatorios
//mostre os valores do estado e crie um botao que ao clicar nele troque os valores

const [veiculo, setVeiculo] = useState({
    marca: 'Toyota',
    modelo: 'Corolla',
    cor: 'Branca'
})

function proximo(){
    setVeiculo({
    marca: 'Honda',
    modelo: 'Civic',
    cor: 'Vermelho'
    })
}

    return ( 
        <>
        <PageTitle title='UsesState' subtitle='cria estados para nossa função'/>
        <SectionTitle title='Exemplo 01'/>

        <div className="center">
            <button onClick={add}> +1 </button>
            
            <p>Contador: {count}</p>
                <button onClick={
                    ()=> setCount(count-1)
                }> -1</button>
        </div>

        <SectionTitle title='Exemplo 02'/>
        <div className='center'>
            <p>Nome: {dados.nome}</p>
            <p>Idade: {dados.idade} anos</p>
            <button onClick={trocarIdade}>Trocar</button>

        </div>
        <SectionTitle title='Exemplo 03'/>
        <div className='center'>
            <p>marca: {veiculo.marca}</p>
            <p>modelo: {veiculo.modelo}</p>
            <p>cor: {veiculo.cor}</p>
            <button onClick={proximo}>Seguinte</button>

        </div>


            
        </>
    );
};
