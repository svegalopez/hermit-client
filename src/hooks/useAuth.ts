import { useEffect, useMemo, useState } from "react";
import { User } from "../context/authContext";

const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
            return;
        }

        async function fetchuser() {
            const res = await fetch(`${process.env.REACT_APP_HERMIT_HOST}/api/users/current`, {
                method: 'GET',
                headers: { 'Authorization': token! },
                credentials: "include"
            })

            if (!res.ok) return setLoading(false);
            const { email } = await res.json();
            setUser({ email });
            setLoading(false);
        }

        // Asynchronously fetch the current user
        fetchuser().catch(err => console.error(err));

    }, []);

    const value = useMemo(() => {
        return {
            loading: loading,
            value: {
                user: user,
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
                    const { token } = await res.json();
                    localStorage.setItem('token', token);

                    res = await fetch(`${process.env.REACT_APP_HERMIT_HOST}/api/users/current`, {
                        method: 'GET',
                        headers: { 'Authorization': token },
                        credentials: "include"
                    })
                    if (!res.ok) {
                        throw new Error('Error logging in, please try again');
                    }
                    const user = await res.json();
                    setUser({ email: user.email });
                },
                logout: async () => {

                    const token = localStorage.getItem('token');
                    if (!token) return;

                    // TODO deleting the agentKey should not require a token
                    fetch(`${process.env.REACT_APP_HERMIT_HOST}/api/users/logout`, {
                        method: 'DELETE',
                        headers: { 'Authorization': token },
                        credentials: "include"
                    }).catch((err) => console.error(err));

                    localStorage.removeItem('token');
                    setUser(null);
                },
            }
        };
    }, [user, loading]);

    return value;
}

export default useAuth;