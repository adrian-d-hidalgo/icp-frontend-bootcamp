// AuthContext.js
import React, { createContext, useEffect, useState } from 'react';

import { AuthClient } from "@dfinity/auth-client";

// Crear el contexto
export const AuthContext = createContext();

// Crear el proveedor del contexto
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const authClient = await AuthClient.create();
        const identity = authClient.getIdentity();
        const principal = identity.getPrincipal();

        if (!principal.isAnonymous()) {
            setIsAuthenticated(true);
        }
    }

    // Función para iniciar sesión
    const login = async () => {
        const authClient = await AuthClient.create();
        authClient.login({
            identityProvider: process.env.REACT_APP_INTERNET_COMPUTER_PROVIDER,
            onSuccess: async () => {
                setIsAuthenticated(true);
            },
            onError: (err) => {
                console.error(err);
            },
        });
    };

    // Función para cerrar sesión
    const logout = async () => {
        const authClient = await AuthClient.create();
        await authClient.logout();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
