import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button className="btn text-light border-light"
                    onClick={()=> loginWithRedirect()}>
                Log In
            </button>
        )
    )
}

export default LoginButton;