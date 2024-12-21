import React, { createContext } from 'react'
// Create your context here

export const QuotesContext = createContext()

const value = {
    car: 'Honda Accord'
}

export function QuoteProvider(props) {

    return (
        <QuotesContext.Provider value={value}>
            {props.children}
        </QuotesContext.Provider>
    )
}