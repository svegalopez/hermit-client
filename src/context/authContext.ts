import { createContext } from "react";

export interface User {
    id: number
    email: string
    roles: string[]
}

export interface IAuthCtx {
    user: User | null
    token: () => string
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}

const AuthCtx = createContext<IAuthCtx>({
    token: () => '',
    user: null,
    login: () => Promise.resolve(),
    logout: () => null
});

export default AuthCtx;