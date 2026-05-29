import { createContext, useContext, useEffect, useState } from "react";
import { loadProducts } from "../services/dataService";

import PropTypes from 'prop-types';
import { childrenProp } from '../propTypes';



const AppContext = createContext(null)

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadProducts().then(data => {
            setProducts(data)
            setLoading(false)
        })
    }, [])

    const value = useMemo(() => ({ products, loading }), [products, loading]);

    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    );
}


ProductProvider.propTypes = {
    ...childrenProp
};

export function useProducts(){
    return useContext(AppContext)
}