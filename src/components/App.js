import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';

import Header from './Header/Header'
import Accounts from './Accounts';
import Transactions from "./Transactions";
import VariableAccount from "./UserAccount";

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
                                <Accounts /> } />
                            <Route path="/Transactions" render={ () =>
                                <Transactions /> } />
                            <Route path="/Accounts/:id" component={VariableAccount} />
                        </div>
                    </Container>
                </BrowserRouter>
            </div>
        </Provider>
    )

}

export default App;