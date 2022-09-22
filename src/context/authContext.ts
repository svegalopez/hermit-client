import { createContext } from "react";

export interface User {
    name: string;
}

interface AuthCtx {
    user: User | null;
    login: (username: string, password: string) => void,
    logout: () => void
}

const AuthCtx = createContext<AuthCtx>({
    user: null,
    login: () => null,
    logout: () => null
});

export default AuthCtx;