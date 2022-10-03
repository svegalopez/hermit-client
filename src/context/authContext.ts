import { createContext } from "react";

export interface User {
    email: string
}

export interface IAuthCtx {
    token: string;
    user: User | null;
    login: (email: string, password: string) => Promise<void>,
    logout: () => void
}

const AuthCtx = createContext<IAuthCtx>({
    token: '',
    user: null,
    login: () => Promise.resolve(),
    logout: () => null
});

export default AuthCtx;