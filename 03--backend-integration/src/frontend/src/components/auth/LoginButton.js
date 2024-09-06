import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function LoginButton() {
    const { login } = useContext(AuthContext);

    return (
        <button onClick={login}>Log in</button>
    );
}

export default LoginButton;