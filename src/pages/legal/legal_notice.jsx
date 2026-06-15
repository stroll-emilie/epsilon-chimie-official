import './legal.css'
import { Link } from 'react-router-dom'

import { useApp } from '../../context/AppContext'
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher';

import useActiveSection from '../../hooks/useActiveSection';
import { scrollTo } from '../../utils/scroll';

function LegalNotice() {

    const sections = [
        { key: 'publisher' },
        { key: 'host' },
        { key: 'property' },
        { key: 'liability' },
        { key: 'law' },
        { key: 'changes' },
    ];

    const { t } = useApp()
    const [activeKey, setActiveKey] = useActiveSection(sections);



    return (
    <>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>LEGAL NOTICE</span></div>
            <div>
                <h2>Legal Notice</h2>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='legal-notice'>
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
                            {t(`legal-notice.sections.${key}.title`)}
                        </button>
                    ))}
                </ul>
            </article>


            <article>
                <ul>
                    <p dangerouslySetInnerHTML={{__html: t('legal-notice.head')}} />
                    {sections.map(({ key }) => (
                        <li key={key} id={key}>
                            <h3>{t(`legal-notice.sections.${key}.title`)}</h3>
                            <p dangerouslySetInnerHTML={{ __html: t(`legal-notice.sections.${key}.content`) }} />
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

export default LegalNotice