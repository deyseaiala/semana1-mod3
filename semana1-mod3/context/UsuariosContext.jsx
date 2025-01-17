import { createContext, useState } from "react";

export const UsuariosContext = createContext();

export const UsuariosContextProvider = (children) => {
    const [usuarios, setUsuarios] = useState([]);

    return (
        <UsuariosContext.Provider value={{usuarios, setUsuarios }}>
            {children}
        </UsuariosContext.Provider>
    )

}
