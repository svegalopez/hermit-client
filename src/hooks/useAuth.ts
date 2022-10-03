import { IAuthCtx } from './../context/authContext';
import { useEffect, useMemo, useState } from "react";
import { User } from "../context/authContext";

const useAuth = (): [boolean, IAuthCtx] => {
    const [loading, setLoading] = useState(true);
    const [creds, setCreds] = useState<{ user?: User, token?: string }>({});

    useEffect(() => {
        async function fetchuser() {
            const res = await fetch(`${process.env.REACT_APP_HERMIT_HOST}/api/users/current`, {
                method: 'GET',
                credentials: "include"
            })

            if (!res.ok) return setLoading(false);
            const { user, token }: { user: User, token: string } = await res.json();
            setCreds({ user, token });
            setLoading(false);
        }
        // Asynchronously fetch the current user
        fetchuser().catch(err => console.error(err));
    }, []);

    const authCtx: IAuthCtx = useMemo(() => {
        return {
            token: creds.token!,
            user: creds.user!,
            login: async (email: string, password: string) => {
                let res = await fetch(`${process.env.REACT_APP_HERMIT_HOST}/api/users/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                    credentials: 'include'
                })
                if (!res.ok) {
                    throw new Error('Error logging in, please check your credentials');
                }
                const { token, user } = await res.json();
                setCreds({ user, token });
            },
            logout: async () => {
                // TODO deleting the agentKey should not require a token
                fetch(`${process.env.REACT_APP_HERMIT_HOST}/api/users/logout`, {
                    method: 'DELETE',
                    credentials: "include"
                }).catch((err) => console.error(err));

                setCreds({});
            }
        };
    }, [creds]);

    return [loading, authCtx];
}

export default useAuth;