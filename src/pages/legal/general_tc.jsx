import './legal.css'
import { Link } from 'react-router-dom'

import { useApp } from '../../context/AppContext'
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher';
import useActiveSection from '../../hooks/useActiveSection';
import { scrollTo } from '../../utils/scroll';

function GeneralTC() {

    const sections = [
        { key: 'purpose' },
        { key: 'description'},
        { key: 'property'},
        { key: 'liability'},
        { key: 'hyperlinks'},
        { key: 'personal',special: 'link' },
        { key: 'governing'},
        { key: 'changes'},
    ]

    const { t } = useApp()
    const [activeKey, setActiveKey] = useActiveSection(sections);

    return (
    <>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>GENERAL T&C</span></div>
            <div>
                <h2>General Terms of Use & Conditions</h2>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='general-tc'>
            <article>
                <LanguageSwitcher/>
                <p>on this page</p>
                <ul>
                    {sections.map(({ key, special }, i) => (
                        <button
                        key={key}
                        onClick={() => { scrollTo(key); setActiveKey(key); }}
                        className={activeKey === key ? 'active' : ''}
                        >
                            {t(`general-tc.sections.${key}.title`)}
                        </button>
                    ))}
                </ul>
            </article>


            <article>
                <ul>
                    {sections.map(({ key, special }) => (
                        
                        <li key={key} id={key}>
                            <h3>{t(`general-tc.sections.${key}.title`)}</h3>

                            {!special && (
                            <p dangerouslySetInnerHTML={{ __html: t(`general-tc.sections.${key}.content`) }} />
                            )}

                            {special === 'link' && (
                            <div>
                                {t('general-tc.sections.personal.content-before')}
                                {' '}<Link to={t('general-tc.sections.personal.link-url')}>{t('general-tc.sections.personal.link-text')}</Link>{' '}
                                {t('general-tc.sections.personal.content-after')}
                                <div dangerouslySetInnerHTML={{ __html: t('general-tc.sections.personal.content-rest') }} />
                            </div>
                            )}
                        </li>
                    ))}
                </ul>

                <div className='legal-note'>
                    <p>{t('note')}</p>
                </div>
            </article>
        </section>
    </>
    )
}

export default GeneralTC