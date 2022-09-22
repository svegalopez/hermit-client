import { useEffect, useMemo, useState } from "react";
import { User } from "../context/authContext";

const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Asynchronously fetch the current user
        setTimeout(() => {
            let user = localStorage.getItem('user');
            if (user) {
                let parsed = JSON.parse(user) as User
                setUser(parsed);
            } else {
                setUser(null)
            }

            setLoading(false);
        }, 2000);
    }, []);

    const value = useMemo(() => {
        return {
            loading: loading,
            value: {
                user: user,
                login: (username: string, password: string) => {
                    localStorage.setItem('user', JSON.stringify({ name: username }));
                    setUser({ name: username });
                },
                logout: () => {
                    localStorage.removeItem('user');
                    setUser(null);
                },
            }
        };
    }, [user, loading]);

    return value;
}

export default useAuth;