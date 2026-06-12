import { useState } from 'react'
import './legal.css'
import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher'

const SECTIONS = [
    'scope', 'offers', 'prices', 'payment', 'risk',
    'specifications', 'compilance', 'acceptance', 'warranties',
    'reach', 'export', 'force', 'property', 'confidentiality',
    'protection', 'corruption', 'termination', 'governing', 'provisions'
]

function Cgv() {
    const { t } = useApp()
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    return (
    <>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>CGV</span></div>
            <div>
                <h2>General terms and conditions of sale</h2>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='cgv'>
            <article>
                <LanguageSwitcher/>
                <p>on this page</p>
                <ul>
                    {t('cgv.nav').map((item, i) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </article>

            <article>
                <p dangerouslySetInnerHTML={{ __html: t('cgv.head') }} />
                <ul>
                    {SECTIONS.map((section, i) => (
                        <li key={section}>
                            <h3 onClick={() => toggle(i)}>
                                {t(`cgv.sections.${section}.title`)}
                                <span>{openIndex === i ? ' ▲' : ' ▼'}</span>
                            </h3>

                            {openIndex === i && (
                                t(`cgv.sections.${section}.subsections`).map((item, j) => (
                                    <div key={item}>
                                        <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                        {item.head    && <p>{item.head}</p>}
                                        {item.content && <p dangerouslySetInnerHTML={{ __html: item.content }} />}
                                        {item.list    && (
                                            <ul>
                                                {item.list.map((li, k) => (
                                                    <li key={li} dangerouslySetInnerHTML={{ __html: li }} />
                                                ))}
                                            </ul>
                                        )}
                                        {item.foot && <p>{item.foot}</p>}
                                    </div>
                                ))
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

export default Cgv