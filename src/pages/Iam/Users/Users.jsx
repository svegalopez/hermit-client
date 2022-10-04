import { useContext, useEffect } from "react";
import AuthCtx from "../../../context/authContext";

export default function Users() {
  // this page fetches a list of users

  const { token } = useContext(AuthCtx);

  useEffect(() => {
    async function fetchusers() {
      const res = await fetch(
        `${process.env.REACT_APP_HERMIT_HOST}/api/users`,
        {
          method: "GET",
          headers: { Authorization: token() },
        }
      );

      if (!res.ok) return;
      const users = await res.json();
    }

    fetchusers().catch((err) => console.error(err));
  }, []);

  return <h1>Fetching users</h1>;
}
