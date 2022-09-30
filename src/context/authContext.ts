import { createContext } from "react";

export interface User {
    email: string
}

interface IAuthCtx {
    user: User | null;
    login: (email: string, password: string) => void,
    logout: () => void
}

const AuthCtx = createContext<IAuthCtx>({
    user: null,
    login: () => null,
    logout: () => null
});

export default AuthCtx;