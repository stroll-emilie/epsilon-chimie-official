import { createContext, useContext, useEffect, useState, useMemo  } from "react";
import { loadProducts } from "../services/dataService";
import { childrenProp } from '../propTypes';

import fr from '../locales/fr.json'
import en from '../locales/en.json'

const translations = {fr, en}
const AppContext = createContext(null)

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [lang, setLang] = useState('en')

    useEffect(() => {
        loadProducts().then(data => {
            setProducts(data)
            setLoading(false)
        })
    }, [])

    const t = useMemo(() => 
        (key) => key.split('.').reduce((obj, i) => obj?.[i], translations[lang])
    , [lang])

    const value = useMemo(() => ({ 
        products, 
        loading, 
        lang, 
        setLang, 
        t 
    }), [products, loading, lang, t]);

    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    );
}

ProductProvider.propTypes = {
    ...childrenProp
};

export function useApp(){
    return useContext(AppContext)
}