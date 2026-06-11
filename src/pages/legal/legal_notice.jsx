import './legal.css'
import { Link } from 'react-router-dom'

import { useApp } from '../../context/AppContext'
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher';

function LegalNotice() {

    const { t } = useApp()

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
                    {t('legal-notice.nav').map((item,i) => (
                        <li key={i}>{item}</li>
                    ))}

                </ul>
            </article>


            <article>
                <ul>
                    <p dangerouslySetInnerHTML={{__html: t('legal-notice.head')}} />
                    <li>
                        <h3>{t('legal-notice.sections.publisher.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('legal-notice.sections.publisher.content')}} />
                    </li>

                    <li>
                        <h3>{t('legal-notice.sections.host.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('legal-notice.sections.host.content')}} />
                    </li>

                    <li>
                        <h3>{t('legal-notice.sections.property.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('legal-notice.sections.property.content')}} />
                    </li>

                    <li>
                        <h3>{t('legal-notice.sections.liability.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('legal-notice.sections.liability.content')}} />
                    </li>

                    <li>
                        <h3>{t('legal-notice.sections.law.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('legal-notice.sections.law.content')}} />
                    </li>

                    <li>
                        <h3>{t('legal-notice.sections.changes.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('legal-notice.sections.changes.content')}} />
                    </li>
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