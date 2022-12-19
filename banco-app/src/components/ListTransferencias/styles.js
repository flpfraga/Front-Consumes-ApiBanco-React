import styled from "styled-components";

export const Wraper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    ul{
        width: 100%;
        height: 90%;
        
    }
    li{
        width: 95%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content:center;
        list-style-type: none;
        border: 1px solid #000;
    }
    .box-title{
        width: 95%;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    a{
        width: 25%;
        height:30px ;
        display: flex;
        align-items: center;
        justify-content:center;
    }
`