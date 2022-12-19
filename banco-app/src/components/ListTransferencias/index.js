import React, { useContext, useState, createContext, useEffect } from "react";

import * as S from './styles'

import LinhaTransferencia from "../LinhaTransferencia";

function ListTransferencias(props) {
    const [results, setResults] = useState(props.lista)
    return (

        <S.Wraper>
            <div className="box-title">
                <a>Data</a>
                <a>Valor</a>
                <a>Tipo</a>
                <a>Operador</a>
            </div>
            <ul>
                {results.map((element, e) => {
                    return (
                        <li key={e}>
                            <LinhaTransferencia elemento={element} />
                        </li>
                    )
                })}

            </ul>
        </S.Wraper>
    )
}
export default ListTransferencias