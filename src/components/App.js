import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';

import Header from './Header/Header';
import ProtectedRoute from "../auth/ProtectedRoute";
import Home from "./Home";
import Accounts from './Accounts';
import Transactions from "./Transactions";
import UserAccount from "./UserAccount";
import { useAuth0 } from "@auth0/auth0-react";

import store from "../store";

const App = () => {

    const { isLoading } = useAuth0();

    if(isLoading) return <div>Loading...</div>

    return (
        <Provider store={store}>
            <div>
                <Header />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <ProtectedRoute path="/Accounts" component={Accounts} />
                        <ProtectedRoute path="/Transactions" component={Transactions} />
                        <ProtectedRoute path="/UserAccount/:id" component={UserAccount} />
                    </Switch>
                </Container>
            </div>
        </Provider>
    )

}

export default App;