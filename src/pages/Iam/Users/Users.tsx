import { useContext, useEffect, useState } from "react";
import AuthCtx from "../../../context/authContext";
import { addToken } from "../../../utils/addToken";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "./gql";
import { User } from "../../../types";
import Toaster from "../../../components/Toaster";

interface UsersData {
  users: User[];
}

export default function Users() {
  const [msg, setMsg] = useState<JSX.Element | null>(null);
  const { token } = useContext(AuthCtx);
  const { loading, error, data } = useQuery<UsersData>(
    GET_USERS,
    addToken(token)
  );

  useEffect(() => {
    if (error) setMsg(<p>{error.message}</p>);
  }, [error]);

  if (loading) return <p>Loading...</p>;
  if (error) return msg && <Toaster content={msg} setContent={setMsg} />;

  return (
    <div>
      <ul>
        {data &&
          data.users.map((el) => (
            <li key={el.email}>
              {el.email} {el.roles[0] ? `(${el.roles[0].name})` : ""}
            </li>
          ))}
      </ul>
    </div>
  );
}
