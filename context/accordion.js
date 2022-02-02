import { useState, createContext } from "react"

export const AccordionContext = createContext();

export const AccordionContextProvider = ({ children }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    const accordionState = {
        accordionOpen,
        setAccordionOpen
    }

    return (
        <AccordionContext.Provider value={accordionState}>
            {children}
        </AccordionContext.Provider>
    )
}