import styled from 'styled-components';

const DivRegister = styled.div`
    min-width:100vw ;
    min-height:100vh ;
    width:100% ;
    height:100% ;
    display: flex;
    justify-content: center;
    align-items:  center;
    flex-direction: column;
    background-color: #e9e9e9;
    background-image: url("https://images.unsplash.com/photo-1597633611385-17238892d086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x:center;
    background-position-y:center;
    
    div{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    label{
        font-weight:bold;
        font-size:small ;
    }
    input[type='email']{
        padding:15px 10px;
        color:black;
        min-width: 250px;
        margin:0px;
        box-sizing:border-box;
        margin-bottom: 1em;
        border: solid 1px black;
        border-radius: 5px;
    }
    label::after{
        /* content:'Preencha o seu email corretamente' ; */
        content:'${props=> props.error }';
        color: red;
        display:${props => props.error ? "block": "none"};
    }

    button{
        padding:15px 10px;
        box-sizing:border-box;
        min-width: 250px;
        background-color:#ec931d ;
        color:black ;
        font-weight: bold;
        text-transform:uppercase;
        cursor: pointer;
        border: solid 1px black;
        border-radius: 5px;

    }
    button:hover{
        background-color:#eb7e1d ;
        box-shadow: inset 0px -2px black ;
    }
`;

export {DivRegister};