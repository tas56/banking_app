import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';

import Header from './Header/Header'
import Accounts from './Accounts';
import Transactions from "./Transactions";
import UserAccount from "./UserAccount";
import { useAuth0 } from "@auth0/auth0-react";

import store from "../store";

const App = () => {

    const {isLoading} = useAuth0();

    if(isLoading) return <div>Loading...</div>

    return (
        <Provider store={store}>
            <div>
                <BrowserRouter>
                    <Header />
                    <Container>
                        <div>
                            <Route path="/" exact render={ () =>
                                <Accounts /> } />
                            <Route path="/Transactions" render={ () =>
                                <Transactions /> } />
                            <Route path="/UserAccount/:id" component={UserAccount} />
                        </div>
                    </Container>
                </BrowserRouter>
            </div>
        </Provider>
    )

}

export default App;