import { useMemo, useState } from "react";
import { IToastCtx } from "../context/toastContext";

export default function useToaster() {
    const [toastContent, setToastContent] = useState<JSX.Element | null>(null);

    const toastContext: IToastCtx = useMemo(() => {
        return {
            toast: (el: JSX.Element) => {
                setToastContent(el);
            },
        };
    }, []);

    return [toastContent, toastContext]
}