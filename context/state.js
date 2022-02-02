import { cloneElement } from "react"

import { AccordionContextProvider } from "."

function ProviderComposer({ contexts, children }){
    return contexts.reduceRight(
        (kids, parent) => 
            cloneElement(parent, {
                children: kids
            }),
        children
    )
}

const ContextProvider = ({children}) => {
    return (
        <ProviderComposer
            contexts={[
                <AccordionContextProvider />,
            ]}
        >
            {children}
        </ProviderComposer>
    )
}

export default ContextProvider;