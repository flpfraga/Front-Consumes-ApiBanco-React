import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/',

})

export async function get(id) {

    try{
        const transferencias = await api.get('transf/v1/conta/'+id, {
        })
        return transferencias
    }
    catch(error){
        console.log(error);
        return false
    }


}
export async function getWithParameter(id, parameters) {

    try{
        const transferencias = await api.get('transf/v1/conta/'+id, {
            params:parameters
        })
        return transferencias
    }
    catch(error){
        console.log(error);
        return false
    }


}

export default api;