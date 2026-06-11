import './legal.css'
import { Link } from 'react-router-dom'

import { useApp } from '../../context/AppContext';
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher';

function PrivacyPolicy() {

    const { t } = useApp()

    return (
    <>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>PRIVACY POLICY</span></div>
            <div>
                <h2>Privacy Policy</h2>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='privacy-policy'>
            <article>
                <LanguageSwitcher />
                <p>on this page</p>
                <ul>
                    {t('privacy-policy.nav').map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </article>


            <article>
                <p>Epsilon Chimie SARL respects your privacy and is committed to processing your personal data in accordance with the General Data Protection Regulation (EU) 2016/679 (“GRPD”) and the French Data Protection Act.</p>
                <ul>
                    <li>
                        <h3>{t('privacy-policy.sections.controller.title')}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t('privacy-policy.sections.controller.content') }} />
                    </li>
                    
                    <li>
                        <h3>{t('privacy-policy.sections.collect.title')}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t('privacy-policy.sections.collect.content') }} />
                    </li>
                    <li>
                        <h3>{t('privacy-policy.sections.purpose.title')}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t('privacy-policy.sections.purpose.content') }} />
                    </li>

                    <li>
                        <h3>{t('privacy-policy.sections.retention.title')}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t('privacy-policy.sections.retention.content') }} />
                    </li>

                    <li>
                        <h3>{t('privacy-policy.sections.cookies.title')}</h3>
                        {t('privacy-policy.sections.cookies.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>
                    <li>
                        <h3>{t('privacy-policy.sections.rights.title')}</h3>
                        <p>{t('privacy-policy.sections.rights.head')}</p>
                        <ul>
                            {t('privacy-policy.sections.rights.list').map((item,i) => (
                                <li key={i} dangerouslySetInnerHTML={{__html: item}}></li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <h3>{t('privacy-policy.sections.transfers.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('privacy-policy.sections.transfers.content') }} />
                    </li>
                    <li>
                        <h3>{t('privacy-policy.sections.security.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('privacy-policy.sections.security.content')}} />
                    </li>
                    <li>
                        <h3>{t('privacy-policy.sections.changes.title')}</h3>
                        <p dangerouslySetInnerHTML={{__html: t('privacy-policy.sections.changes.content')}} />
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

export default PrivacyPolicy