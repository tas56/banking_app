import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

    const [currentPage,setCurrentPage] = useState('/');

    const isActiveTab = (tabName) => {
        return (tabName === setCurrentPage) ? 'nav-link active' : 'nav-link';
    }

    const onTabClick = (event, tabName) => {
        setCurrentPage({ currentPage: tabName })
    }

    return (
        <ul className='nav page-tabs'>
            <li className='nav-item'>
                <Link className={isActiveTab('/')} to="/"
                      onClick={event => onTabClick(event, '/')}>
                    Accounts
                </Link>
            </li>
            <li className='nav-item'>
                <Link className={isActiveTab('/Transactions')} to="/Transactions"
                      onClick={event => onTabClick(event, '/Transactions')}>
                    Transactions
                </Link>
            </li>
        </ul>
    )

}
export default Navigation;