import './legal.css'
import { Link } from 'react-router-dom'

import { useApp } from '../../context/AppContext';
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher';

import useActiveSection from '../../hooks/useActiveSection';
import { scrollTo } from '../../utils/scroll';

function PrivacyPolicy() {

    const sections = [
        { key: 'controller' },
        { key: 'collect' },
        { key: 'purpose' },
        { key: 'retention' },
        { key: 'cookies',  special: 'subsections' },
        { key: 'rights',   special: 'list' },
        { key: 'transfers' },
        { key: 'security' },
        { key: 'changes' },
    ];

    const { t } = useApp()
    const [activeKey, setActiveKey] = useActiveSection(sections);


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
                    <li>
                    {sections.map(({ key, special }, i) => (
                        <button
                        key={key}
                        onClick={() => { scrollTo(key); setActiveKey(key); }}
                        className={activeKey === key ? 'active' : ''}
                        >
                            {t(`privacy-policy.sections.${key}.title`)}
                        </button>
                    ))}
                    </li>
                </ul>
            </article>

            <article>
                <p>Epsilon Chimie SARL respects your privacy and is committed to processing your personal data in accordance with the General Data Protection Regulation (EU) 2016/679 (“GRPD”) and the French Data Protection Act.</p>
                <ul>
                {sections.map(({ key, special }, i) => (
                    <li key={key} id={key}>
                    <h3>{t(`privacy-policy.sections.${key}.title`)}</h3>

                    {!special && (
                        <p dangerouslySetInnerHTML={{ __html: t(`privacy-policy.sections.${key}.content`) }} />
                    )}

                    {special === 'subsections' && (
                        t('privacy-policy.sections.cookies.subsections').map((item, i) => (
                        <div key={item}>
                            <span dangerouslySetInnerHTML={{ __html: item.title }} />
                            <p dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                        ))
                    )}

                    {special === 'list' && (
                        <>
                            <p>{t('privacy-policy.sections.rights.head')}</p>
                            <ul>
                                {t('privacy-policy.sections.rights.list').map((item, i) => (
                                <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        </>
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

export default PrivacyPolicy