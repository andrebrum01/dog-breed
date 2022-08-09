import React, { useContext } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {TokenContext, TokenProvider} from './Context/ContextToken';

import Register from './Page/Register';
import ListaDog from './Page/ListaDog';



const Router = () => {
    const ProtectedRoute = ({ children }) => {

        const {token} = useContext(TokenContext);
        console.log(token);
        if(!token){
            return <Navigate to="/" replace/>
        }
        return children;
    }

    return(
        <TokenProvider>
            <BrowserRouter>
            <Routes>
                    <Route element = {< Register context={TokenContext}/> } path="/"  exact />
                    <Route element = {<ProtectedRoute>
                        <ListaDog context={TokenContext}/> 
                    </ProtectedRoute>
                    } path="/list"  exact />
            </Routes>
            </BrowserRouter>
        </TokenProvider>
    );
}

export default Router;