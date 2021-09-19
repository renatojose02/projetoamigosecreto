import React from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";

import Login from './Pages/login';
import Principal from './Pages/principal';
import Novoparticipante from './Pages/novoparticipante';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route patch="/" exact component={Login} />
                <Route patch="/principal"  component={Principal} />
                <Route patch="/novoParticipante" component={Novoparticipante} />
            </Switch>
        </BrowserRouter>
    );
}