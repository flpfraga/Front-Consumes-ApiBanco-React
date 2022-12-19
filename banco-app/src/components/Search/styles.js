import styled from "styled-components";

export const Wraper = styled.div`
    width: 100%;
    height:300px;
    display: flex;
    flex-direction:column ;
    justify-content:center;
    align-items: center;

    *{
        font-family: 'Marvel', sans-serif;
    }
    .input-box{
        width: 90%;
        height:150px;
        display: flex;
        justify-content:space-around;
        align-items: center;
    }
    .input-element{
        width: 200px;
        height:150px;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }
    input{
        width: 150px;
        height:30px;
        border: 1px solid black;
        font-size: 15px;
        text-align:center;
    }
    .erro-formating{
        font-size: 10px;
        color:red;
    }

    .button-box{
        width: 90%;
        height:150px;
        display: flex;
        justify-content:flex-end;
        align-items: center;
    }
    button{
        width: 80px;
        height:40px;
        font-size: 15px;
        background-color:#000;
        border: 1px, solid #000;
        border-radius: 5px;
        color:#FFF;
        cursor: pointer;
        transition: 0.3s;
    }
    button:hover{
        transform: scale(1.02);
    }
    
`