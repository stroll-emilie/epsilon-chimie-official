// components/LanguageSwitcher.jsx
import { useApp } from '../../context/AppContext';

function LanguageSwitcher() {
    const { lang, setLang } = useApp()

    return (
        <nav>
            <button
                className={lang === 'fr' ? 'active' : ''}
                onClick={() => setLang('fr')}
                
            >
                FR
            </button>
            <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
            >
                EN
            </button>
        </nav>
    )
}

export default LanguageSwitcher