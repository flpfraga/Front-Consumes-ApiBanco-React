import React, { useEffect, useState} from 'react'

import Search from '../Search'

import * as S from './styles'

import Results from '../Results'

import { useTransfResults } from '../../context/TransfResults'


function Home({ }) {

    const[list, setList] = useState([])
    const { results } = useTransfResults()
    useEffect(()=>{
        setList(results)
    },[list])
    return (

        <S.Wraper>
           <Search/>
           <Results resultList = {list}/>
        </S.Wraper>
    )
}




export default Home 