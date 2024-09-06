import { useState } from "react";

function LoginButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log out" : "Log in"}</button>
    );
}

export default LoginButton;