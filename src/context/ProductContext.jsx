import { createContext, useContext, useEffect, useState } from "react";
import { loadProducts } from "../services/dataService";

import { childrenProp } from "../propTypes";
ProductProvider.prototype = childrenProp

const ProductContext = createContext(null)

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadProducts().then(data => {
            setProducts(data)
            setLoading(false)
        })
    }, [])

    return (
        <ProductContext.Provider value={{products, loading}}>
            {children}
        </ProductContext.Provider>
    )
}


export function useProducts(){
    return useContext(ProductContext)
}