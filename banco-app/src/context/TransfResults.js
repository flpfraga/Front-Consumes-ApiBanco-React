import React, { useContext, useState, createContext } from "react";

const TransfResultsContext = createContext()

export default function TransfResultsProvider({ children }) {

    const [results, setResults] = useState([])
    return (
        
        <TransfResultsContext.Provider
        children
        key={1}
            value={{
                results,
                setResults
            }}
        >
            {children}
        </TransfResultsContext.Provider>
    )
}

export function useTransfResults() {
    const context = useContext(TransfResultsContext)
    const { results, setResults } = context
    return { results, setResults }
}