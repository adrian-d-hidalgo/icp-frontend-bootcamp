// AuthContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
const AuthContext = createContext();

// Crear el proveedor del contexto
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Función para iniciar sesión
    const login = () => {
        setIsAuthenticated(true);
    };

    // Función para cerrar sesión
    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
