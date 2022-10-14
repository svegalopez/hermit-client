import "./ChangePassword.scss";

import { gql, useMutation } from "@apollo/client";
import Toaster from "../../../components/Toaster";
import { createRef, useContext, useEffect, useState } from "react";
import AuthCtx from "../../../context/authContext";
import { addToken } from "../../../utils/addToken";

const CHANGE_PASSWORD = gql`
  mutation ChangePassword(
    $current: String!
    $new: String!
    $confirmNew: String!
  ) {
    changePassword(current: $current, new: $new, confirmNew: $confirmNew)
  }
`;

export const ChangePassword = () => {
  const currentPW = createRef<HTMLInputElement>();
  const newPW = createRef<HTMLInputElement>();
  const confirmNewPW = createRef<HTMLInputElement>();

  const { token } = useContext(AuthCtx);
  const [msg, setMsg] = useState<JSX.Element | null>(null);
  const [changePW, { data, loading, error }] = useMutation(CHANGE_PASSWORD);

  useEffect(() => {
    if (error) setMsg(<p>{error.message}</p>);
  }, [error]);

  const submitHandler = (e: any) => {
    e.preventDefault();

    // trigger a mutation using apollo here...
    // form validation is not done yet
    changePW({
      variables: {
        current: currentPW.current!.value,
        new: newPW.current!.value,
        confirmNew: confirmNewPW.current!.value,
      },
      ...addToken(token),
    });
  };

  return (
    <div className="hc-change-password">
      <form onSubmit={submitHandler} className="change-password-form">
        <label htmlFor="current">Current Password</label>
        <input ref={currentPW} id="current" type="password" />

        <label htmlFor="new">New Password</label>
        <input ref={newPW} id="new" type="password" />

        <label htmlFor="new-confirm">New Password Confirm</label>
        <input ref={confirmNewPW} id="new-confirm" type="password" />

        <button>{loading ? "Loading..." : "Submit"}</button>
      </form>
      {data && <Toaster content={<p>Success</p>} setContent={setMsg} />}
      {error && msg && <Toaster content={msg} setContent={setMsg} />}
    </div>
  );
};
