import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {DivRegister} from './styled';

const Register = (props)=>{

    const {token, onToken} = useContext(props.context);

    const [email,setEmail]  = useState();
    const [error,setError]  = useState();

    useEffect((token)=>{
        console.log(token);
    },[token]);

    const navigate = useNavigate();


   async function registroEmail(){
    let e = await onToken(email);
    if(!e){
        console.log("sucesso");
        navigate("/list");
    }
    else{
        console.error(e);
        setEmail("");
        setError("Preencha o email corretamente")
        console.log(error);
    }

   }

    return(
            <DivRegister error={error||null}>
                <div>
                    <label to="email">EMAIL</label>
                    <input 
                        id="email" 
                        type='email' 
                        placeholder="Digite seu email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email||""}
                        required
                    />
                    <button onClick={()=>registroEmail()}>registrar email</button>
                </div>
            </DivRegister>
        );

}

export default Register;