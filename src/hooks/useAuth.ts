import { IAuthCtx } from './../context/authContext';
import { useEffect, useMemo, useState } from "react";
import { User } from "../context/authContext";
import getHost from '../utils/getHost';

const useAuth = (): [boolean, IAuthCtx] => {
    const [loading, setLoading] = useState(true);
    const [creds, setCreds] = useState<{ user?: User, token?: string }>({});
    const [tokenGetter, setTokenGetter] = useState<() => string>(() => '');

    useEffect(() => {
        async function fetchuser() {
            const res = await fetch(`${getHost()}/api/users/well-known`, {
                method: 'GET',
                credentials: "include"
            })

            if (!res.ok) return setLoading(false);
            const { user, tp1, tp2, tp3 } = await res.json();
            const token = `${tp3}.${tp2}.${tp1}`;

            setCreds({ user });
            setTokenGetter((prev) => () => token);
            setLoading(false);
        }
        // Asynchronously fetch the current user
        fetchuser().catch(err => console.error(err));
    }, []);

    const authCtx: IAuthCtx = useMemo(() => {
        return {
            token: tokenGetter,
            user: creds.user,
            login: async (email: string, password: string) => {
                let res = await fetch(`${getHost()}/api/users/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                    credentials: 'include'
                })
                if (!res.ok) {
                    throw new Error('Error logging in, please check your credentials');
                }
                const { token, user } = await res.json();
                setCreds({ user });
                setTokenGetter((prev) => () => token);
            },
            logout: async () => {
                fetch(`${getHost()}/api/users/logout`, {
                    method: 'DELETE',
                    credentials: "include"
                }).catch((err) => console.error(err));
                setCreds({});
                setTokenGetter((prev) => () => '')
            }
        };
    }, [tokenGetter]);

    return [loading, authCtx];
}

export default useAuth;