import './legal.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

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
        <Helmet>
            <title>Legal Notice — Epsilon Chimie</title>
            <meta name="description" content="Legal notice for Epsilon Chimie website. Publisher information, hosting details and intellectual property. Last updated June 2026." />
        </Helmet>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>LEGAL NOTICE</span></div>
            <div>
                <h1>Legal Notice</h1>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='legal-notice'>
            <article>
                <LanguageSwitcher/>
                <p>on this page</p>
                <ul>
                        {sections.map(({ key }, i) => (
                        <li key={key}>
                            <button
                            onClick={() => { scrollTo(key); setActiveKey(key); }}
                            className={activeKey === key ? 'active' : ''}
                            >
                                {t(`legal-notice.sections.${key}.title`)}
                            </button>
                        </li>
                        ))}
                </ul>
            </article>


            <article>
                <p dangerouslySetInnerHTML={{__html: t('legal-notice.head')}} />
                <ul>
                    {sections.map(({ key }) => (
                        <li key={key} id={key}>
                            <h2>{t(`legal-notice.sections.${key}.title`)}</h2>
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