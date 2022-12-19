import React, { useEffect } from "react";

import * as S from './styles'

import { useTransfResults } from '../../context/TransfResults'

import ListTransferencia from '../ListTransferencias'


function Results(props) {
	
	// const [teste, setTeste] = useState([{
	// 	"id": 2,
	// 	"data": "2019-02-03",
	// 	"valor": 12.24,
	// 	"tipo": "DEPOSITO",
	// 	"operador": null,
	// 	"conta": {
	// 		"id_conta": 2,
	// 		"nome": "Sicrano"
	// 	}
	// },
	// {
	// 	"id": 4,
	// 	"data": "2019-08-07",
	// 	"valor": -530.5,
	// 	"tipo": "SAQUE",
	// 	"operador": null,
	// 	"conta": {
	// 		"id_conta": 2,
	// 		"nome": "Sicrano"
	// 	}
	// },
	// {
	// 	"id": 6,
	// 	"data": "2021-04-01",
	// 	"valor": 25173.09,
	// 	"tipo": "TRANSFERENCIA",
	// 	"operador": "Ronnyscley",
	// 	"conta": {
	// 		"id_conta": 2,
	// 		"nome": "Sicrano"
	// 	}
	// }])

	// console.log(teste);
	return (

		< S.Wraper >
			<ListTransferencia lista={props.resultList} />
		</S.Wraper >
	)
}
export default Results