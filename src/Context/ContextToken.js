import React from "react";

const TokenContext = React.createContext({
    token:"asda",
    setToken:()=>{}
});

const TokenProvider= ({children}) =>{
    const [token, setToken] = React.useState(null);
    
    const handleToken = async (email) =>{
            console.log(`{"email":"${email}"}`);
            return await fetch("https://dogbreed-api.q9.com.br/register",{
                mode: 'cors',
                method: "POST",
                headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body:`{"email":"${email}"}`
            })
            .then(data=>{
                return data.json();
            })
            .then(post =>{
                console.log(post.user.token);
                setToken(post.user.token);
            })
            .catch(e=>{
                console.error(e);
                return new Error(e);
            });
    }


    const value = {
        token,
        onToken: handleToken
    }

    return(
        <TokenContext.Provider value={value}>
            {children}
        </TokenContext.Provider>
    );
}

export {TokenContext,TokenProvider};