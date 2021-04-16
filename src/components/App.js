import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {FaMinus,FaPlus} from "react-icons/all";
import Container from 'react-bootstrap/Container'

import Header from './Header/Header'
import AccountCard from './Accounts';

import store from "../store";

const App = () => {


    return (
        <Provider store={store}>
            <div>
                <BrowserRouter>
                    <Header />
                    <Container>
                        <div>
                            <Route path="/" exact render={ () =>
                                <AccountCard /> } />
                            <Route path="/Transactions" />
                        </div>
                    </Container>
                </BrowserRouter>
            </div>
        </Provider>
    )

}

export default App;