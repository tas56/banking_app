import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {

    const [currentPage,setCurrentPage] = useState('/');
    const { isAuthenticated } = useAuth0();

    const onTabClick = (event, tabName) => {
        setCurrentPage({ currentPage: tabName })
    }

    return (
        isAuthenticated && (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <Link className={"text-success nav-link"} to="/Accounts"
                          onClick={event => onTabClick(event, '/Accounts')}>
                        Accounts
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className={"text-success nav-link"} to="/Transactions"
                          onClick={event => onTabClick(event, '/Transactions')}>
                        Transactions
                    </Link>
                </li>
            </ul>
        )
    )

}
export default Navigation;