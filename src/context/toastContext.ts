import { createContext } from "react";

export interface IToastCtx {
    toast: (content: JSX.Element) => void
}

const ToastCtx = createContext<IToastCtx>({
    toast: () => null
});

export default ToastCtx;