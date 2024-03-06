import { useContext } from "react"
import { AuthContext } from "./AuthContext"

const Logout = () =>{
    const {isLoggedIn, logout} = useContext(AuthContext);


    return (
        <div>
            {isLoggedIn ? (
                <button onClick={logout}> Logout </button>
            ) :(
                <p>You are already logged out!</p>
            )}
        </div>
    )
}

export default Logout;