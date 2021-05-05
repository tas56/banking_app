import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <button className="btn text-light border-light"
                    onClick={()=> logout()}>
                Log out
            </button>
        )
    )
}

export default LogoutButton;