import './legal.css'
import { Link } from 'react-router-dom'

import { useApp } from '../../context/AppContext'
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher';

function GeneralTC() {

    const { t } = useApp()

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
                    {t('general-tc.nav').map((item,i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </article>


            <article>
                <ul>
                    <li>
                        <h3>{t('general-tc.sections.purpose.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('general-tc.sections.purpose.content')}}/>
                    </li>

                    <li>
                        <h3>{t('general-tc.sections.description.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('general-tc.sections.description.content')}}/>
                    </li>

                    <li>
                        <h3>{t('general-tc.sections.property.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('general-tc.sections.property.content')}}/>
                    </li>

                    <li>
                        <h3>{t('general-tc.sections.liability.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('general-tc.sections.liability.content')}}/>
                    </li>

                    <li>
                        <h3>{t('general-tc.sections.hyperlinks.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('general-tc.sections.hyperlinks.content')}}/>
                    </li>

                    <li>
                        <h3>{t('general-tc.sections.personal.title')}</h3>
                        <p>
                            {t('general-tc.sections.personal.content-before')}
                            {' '}<Link to={t('general-tc.sections.personal.link-url')}>{t('general-tc.sections.personal.link-text')}</Link>{' '}
                            {t('general-tc.sections.personal.content-after')}
                            <div dangerouslySetInnerHTML={{ __html: t('general-tc.sections.personal.content-rest') }} />
                        </p>
                    </li>

                    <li>
                        <h3>{t('general-tc.sections.governing.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('general-tc.sections.governing.content')}}/>
                    </li>

                    <li>
                        <h3>{t('general-tc.sections.changes.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('general-tc.sections.changes.content')}}/>
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

export default GeneralTC