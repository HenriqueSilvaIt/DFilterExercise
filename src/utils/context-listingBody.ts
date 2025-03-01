import { createContext } from "react";

export type ContextQtdCountType = {
    contextCount: number;
    setContextCount: (contextCount: number) => void;
}


export const ContextCount = createContext<ContextQtdCountType>({
    contextCount: 0,
    setContextCount: () => {}

})