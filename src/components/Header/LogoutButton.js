import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (

            <button className="btn text-light border-light"
                    onClick={()=> logout()}>
                Log out
            </button>
    )
}

export default LogoutButton;