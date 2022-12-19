import React, { useState} from "react";

import * as S from './styles'

function LinhaTransferencia(props){
    const [elemento, setElemento] = useState(props.elemento)
    return(
        <S.Wraper>
            <a>{elemento.data}</a>
            <a>{elemento.valor}</a>
            <a>{elemento.tipo}</a>
            <a>{elemento.operador}</a>
        </S.Wraper>
    )
}
export default LinhaTransferencia