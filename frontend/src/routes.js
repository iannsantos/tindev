import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes() {
    return (
        // Toda rota deve estar dentro do BrowserRouter
        <BrowserRouter>
            {/* Uso do exact é para comparar com exatidão o path */}
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    );
}