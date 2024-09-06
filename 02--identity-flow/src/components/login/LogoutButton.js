import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function LogoutButton() {
    const { logout } = useContext(AuthContext);

    return (
        <button onClick={logout}>Log out</button>
    );
}

export default LogoutButton;
