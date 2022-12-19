import React, { useEffect, useState, alert } from 'react'

import * as S from './styles'

import isMatch from 'date-fns/isMatch'

import { get } from '../../service/api'

import { useTransfResults } from '../../context/TransfResults'




function Search() {

    const [conta, setConta] = useState('')
    const [inicio, setInicio] = useState('')
    const [fim, setFim] = useState('')
    const [operador, setOperador] = useState('')
    const [contaIsValidy, setContaIsValidy] = useState(true)
    const [inicioIsValidy, setInicioIsValidy] = useState(true)
    const [fimIsValidy, setFimIsValidy] = useState(true)
    const [transferencias, setTransferencias] = useState ('')
    const { results, setResults } = useTransfResults()
    



    function validy() {
        if(conta ===""){
            setContaIsValidy(false)
        }
        else{
            setContaIsValidy(true)
        }
        if (isMatch(inicio, 'yyyy-MM-dd') && inicio.length > 0) {
            
            setInicioIsValidy(true)
        }
        else{
            setInicioIsValidy(false)
        }
        if (isMatch(fim, 'yyyy-MM-dd') && fim.length > 0) {
            setFimIsValidy(true)
        }
        else{
            setFimIsValidy(false)
        }
        if (inicio && fim && conta && operador) {
            const parameters = {'date_begin': inicio, 'date_end':fim, 'user':operador}
            buscar(parameters)
        }
        if (conta && operador){
            const parameters = {'user':operador}
            buscar(parameters)
        }
        if (inicio && fim && conta){
            const parameters = {'date_begin': inicio, 'date_end':fim}
            buscar(parameters)
        }
        if(conta){
            buscar()
        }
        

    }

    async function buscar(parameters) {
        let isActive = true
        try {
            const response = await get(conta, parameters)
            if (isActive) {
                const result = response.data
                console.log(result);
                setResults(result)
            }
        }
        catch (error) {
            console.log(error)
        }
        return () => {
            isActive = false;
        }
    }
    async function buscar() {
        console.log("buscar");
        let isActive = true
        try {
            const response = await get(conta)
            if (isActive) {
                const result = response.data
                console.log(result);
                setResults(result)
            }
        }
        catch (error) {
            console.log(error)
        }
        return () => {
            isActive = false;
        }
    }

    return (
        <S.Wraper>
            <form >
                <div className='input-box'>
                    <div className='input-element'>
                        <a>Número conta</a>
                        <input style={contaIsValidy ? {} : { border: "1px solid red", color: "red" }}
                            placeholder="0000"
                            maxLength={10}
                            onChange={(e) => setConta(e.target.value)}
                            value={conta}
                            type="text"
                        />
                        {contaIsValidy ? (<></>):(<a className='erro-formating'>Campo obrigatório</a>)}
                    </div>
                    <div className='input-element'>
                        <a>Data Inicio</a>
                        <input 
                            placeholder="dd/mm/aaaa"
                            maxLength={10}
                            onChange={(e) => setInicio(e.target.value)}
                            value={inicio}
                            type="date"
                            pattern='dd-MM-yyyy'
                        />
                    </div>
                    <div className='input-element'>
                        <a>Data Fim</a>
                        <input
                            placeholder="dd/mm/aaaa"
                            maxLength={45}
                            onChange={(e) => setFim(e.target.value)}
                            value={fim}
                            type="date"
                            pattern='dd-MM-yyyy'
                        />
                    </div>
                    <div className='input-element'>
                        <a>Operador</a>
                        <input
                            placeholder="nome"
                            maxLength={10}
                            onChange={(e) => setOperador(e.target.value)}
                            value={operador}
                            type="text"
                        />
                    </div>
                </div>
                <div className='button-box'>
                    <button type='button'
                        onClick={() => validy()}

                    >Pesquisar</button>
                </div>
            </form>


        </S.Wraper>
    )
}

export default Search